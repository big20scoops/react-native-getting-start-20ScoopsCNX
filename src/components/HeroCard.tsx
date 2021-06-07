import React from 'react';
import styled from 'styled-components/native';

interface HeroCardProps {
  name: string;
  thumbnail: string;
}

const Container = styled.View`

`;

const Thumbnail = styled.Image`
  
`;

const Name = styled.Text`
  
`;

const HeroCard = ({ name, thumbnail }: HeroCardProps) => {
  return (
    <Container>
        <Name>{name}</Name>
    </Container>
  );
};

export default HeroCard;