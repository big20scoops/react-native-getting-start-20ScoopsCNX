import React from 'react';
import styled from 'styled-components/native';
import { useQuery, gql } from '@apollo/client';
import { NavigationProp } from '@react-navigation/core';
import { NavigationName } from '../navigation/navigationName';

interface HomeScreenProps {
  navigation: NavigationProp;
};

const Container = styled.View`
  flex: 1;
`;

const PlusButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: ${({ theme }) => theme.colors.brand};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;

  shadow-opacity: 0.3;
  shadow-radius: 8px;
  shadow-color: ${({ theme }) => theme.colors.brand};
  elevation: 12;
`;

const PlusText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  fontSize: 20px;
`;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { loading, error, data } = useQuery(HERO_LIST);

  return (
    <Container>
      <PlusButton onPress={() => navigation.navigate(NavigationName.CREATE)}>
        <PlusText>+</PlusText>
      </PlusButton>
    </Container>
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