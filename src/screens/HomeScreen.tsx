import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useQuery, gql } from '@apollo/client';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.brand};
`;

const HomeScreen = () => {

  const { loading, error, data } = useQuery(HERO_LIST);

  console.log('heroes ==>', data)

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