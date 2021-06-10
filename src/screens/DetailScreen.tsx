import React from 'react';
import styled from 'styled-components/native';
import {useAppSelector} from '../redux/hooks';
import heroSelector from '../redux/selectors/heroSelector';

const Container = styled.View`
  flex: 1;
`;

const Name = styled.Text``;

const DetailScreen = () => {
  const currentHero = useAppSelector(heroSelector.currentHero);

  return (
    <Container>
      <Name>{currentHero}</Name>
    </Container>
  );
};

export default DetailScreen;
