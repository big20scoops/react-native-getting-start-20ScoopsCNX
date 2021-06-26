import {useQuery} from '@apollo/client';
import {StackNavigationProp} from '@react-navigation/stack';
import gql from 'graphql-tag';
import React, {useCallback, useEffect} from 'react';
import {Text} from 'react-native';
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

const ProfileWrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.25);
`;

const ProfileImage = styled.Image`
  height: 200px;
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
    const {
      images: {sm: image},
    } = data.hero;
    return (
      <>
        <ProfileWrapper>
          <ProfileImage resizeMode="contain" source={{uri: image}} />
        </ProfileWrapper>
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
        sm
      }
      powerstats {
        intelligence
        strength
        speed
        durability
        power
        combat
      }
      appearance {
        gender
        race
        weight
        height
        hairColor
        eyeColor
      }
      biography {
        fullName
        alterEgos
        aliases
        placeOfBirth
        firstAppearance
        publisher
        alignment
      }
      work {
        occupation
        base
      }
      connections {
        relatives
        groupAffiliation
      }
    }
  }
`;

export default DetailScreen;
