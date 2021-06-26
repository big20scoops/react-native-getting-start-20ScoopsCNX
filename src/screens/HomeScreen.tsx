import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {useQuery, gql} from '@apollo/client';
import {StackNavigationProp} from '@react-navigation/stack';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';

import {NavigationName} from '../navigation/navigationName';
import {RootStackParamList} from './rootStackPrams';
import HeroCard from '../components/HeroCard';
import {Dimensions, Text} from 'react-native';
import Spinner from '../components/Spinner';
import {useAppDispatch} from '../redux/hooks';
import {selectCurrentHero} from '../redux/reducers/heroSlice';

let {width} = Dimensions.get('window');

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'HEROES'>;
}

interface RowData {
  _id: string;
  name: string;
  images: {
    sm: string;
  };
}

const Container = styled.View`
  flex: 1;
`;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {loading, error, data} = useQuery(HERO_LIST);
  const dispatch = useAppDispatch();

  const renderHeroList = useCallback(() => {
    const dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    const layoutProvider = new LayoutProvider(
      index => {
        return index;
      },
      (_type, dimension) => {
        dimension.height = 125;
        dimension.width = width;
      },
    );

    const renderItem: any = (_type: string, rowData: RowData) => {
      const {
        _id: id,
        name,
        images: {sm: thumbnail},
      } = rowData;
      return (
        <HeroCard
          id={id}
          name={name}
          thumbnail={thumbnail}
          onPress={() => onPressNext(id)}
        />
      );
    };

    const onPressNext = (id: string) => {
      navigation.navigate(NavigationName.DETAIL);
      dispatch(selectCurrentHero(id));
    };

    return (
      <RecyclerListView
        dataProvider={dataProvider.cloneWithRows(data.heros)}
        rowRenderer={renderItem}
        layoutProvider={layoutProvider}
      />
    );
  }, [data, navigation, dispatch]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>{`Error! ${error.message}`}</Text>;
  }

  return <Container>{renderHeroList()}</Container>;
};

const HERO_LIST = gql`
  query {
    heros {
      _id
      name
      images {
        sm
      }
    }
  }
`;

export default HomeScreen;
