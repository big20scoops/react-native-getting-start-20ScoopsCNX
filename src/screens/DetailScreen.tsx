import {useQuery} from '@apollo/client';
import {StackNavigationProp} from '@react-navigation/stack';
import gql from 'graphql-tag';
import React, {useCallback, useEffect} from 'react';
import {Text} from 'react-native-svg';
import styled from 'styled-components/native';
import Spinner from '../components/Spinner';
import {useAppSelector} from '../redux/hooks';
import heroSelector from '../redux/selectors/heroSelector';
import {RootStackParamList} from './rootStackPrams';

interface DetailScreenProps {
  titleName: string;
  navigation: StackNavigationProp<RootStackParamList, 'HEROES'>;
}

const Container = styled.View`
  flex: 1;
`;

const Name = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.black};
`;

const DetailScreen = ({navigation}: DetailScreenProps) => {
  const currentHero = useAppSelector(heroSelector.currentHero);
  const {loading, error, data} = useQuery(HERO_DETAIL, {
    variables: {currentHero},
  });

  useEffect(() => {
    navigation.setOptions({title: data?.hero?.name});
  }, [data, navigation]);

  const renderDetail = useCallback(() => {
    const {name} = data.hero;
    return (
      <>
        <Name>{name}</Name>
      </>
    );
  }, [data]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>{`Error! ${error.message}`}</Text>;
  }

  return <Container>{renderDetail()}</Container>;
};

const HERO_DETAIL = gql`
  query GetHeroData($currentHero: ID!) {
    hero(id: $currentHero) {
      name
      images {
        md
      }
    }
  }
`;

export default DetailScreen;
