import React from 'react';
import styled from 'styled-components/native';

interface HeroCardProps {
  name: string;
  thumbnail: string;
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 10px;
  flex-direction: row;
  border-radius: 10px;

  shadow-opacity: 0.3;
  shadow-radius: 8px;
  shadow-color: ${({ theme }) => theme.colors.brand};
  elevation: 12;
`;

const Thumbnail = styled.Image`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100px;
  height: 100px;
`;

const Name = styled.Text`
  
`;

const HeroCard = ({ name, thumbnail }: HeroCardProps) => {
  return (
    <Container>
        <Thumbnail source={{ uri: thumbnail }} />
        <Name>{name}</Name>
    </Container>
  );
};

export default HeroCard;