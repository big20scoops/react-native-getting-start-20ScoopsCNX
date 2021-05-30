import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.brand};
`;

const HomeScreen = () => {
  return (
    <Container />
  );
};

export default HomeScreen;