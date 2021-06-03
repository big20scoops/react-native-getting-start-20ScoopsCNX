import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useQuery, gql } from '@apollo/client';

const Container = styled.View`
  flex: 1;
`;

const HomeScreen = () => {
  const { loading, error, data } = useQuery(HERO_LIST);

  return (
    <Container />
  );
};

const HERO_LIST = gql`
  query {
    heros {
      name
    }
  }
`;

export default HomeScreen;