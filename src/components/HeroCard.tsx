import React from 'react';
import styled from 'styled-components/native';

interface HeroCardProps {
  name: string;
  thumbnail: string;
}

const Container = styled.View`

`;

const Thumbnail = styled.Image`
  width: 25px;
  height: 25px;
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