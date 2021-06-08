import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../theme/Colors';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={colors.brand} />
    </Container>
  );
};

export default Spinner;