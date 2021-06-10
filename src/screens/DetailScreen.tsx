import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import React, {useCallback} from 'react';
import {Text} from 'react-native-svg';
import styled from 'styled-components/native';
import Spinner from '../components/Spinner';
import {useAppSelector} from '../redux/hooks';
import heroSelector from '../redux/selectors/heroSelector';

const Container = styled.View`
  flex: 1;
`;

const Name = styled.Text``;

const DetailScreen = () => {
  const currentHero = useAppSelector(heroSelector.currentHero);
  const {loading, error, data} = useQuery(HERO_DETAIL, {
    variables: {currentHero},
  });

  const renderDetail = useCallback(() => {
    const {name} = data;
    console.log(data);
    return <Name>{name}</Name>;
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
