import React from 'react';
import styled from 'styled-components/native';

import ArrowIcon from '../icons/right-arrow.svg';

interface HeroCardProps {
  id: string;
  name: string;
  thumbnail: string;
  onPress: Function;
}

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  margin: 10px;
  flex-direction: row;
  border-radius: 10px;

  shadow-opacity: 0.3;
  shadow-radius: 8px;
  shadow-color: ${({theme}) => theme.colors.brand};
  elevation: 12;
`;

const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;

const LeftWrapper = styled.View`
  flex: 0.5;
  align-items: flex-start;
`;

const RightWrapper = styled.View`
  flex: 0.5;
  align-items: flex-end;
`;

const Thumbnail = styled.Image`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100px;
  height: 100px;
`;

const Name = styled.Text`
  margin: 10px;
  color: ${({theme}) => theme.colors.black};
  font-weight: 700;
`;

const DetailButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({theme}) => theme.colors.brand};
  align-items: center;
  justify-content: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-width: 3px;
  border-color: ${({theme}) => `${theme.colors.brand}20`};
  padding: 5px;
`;

const HeroCard = ({name, thumbnail, onPress}: HeroCardProps) => {
  return (
    <Container>
      <Thumbnail source={{uri: thumbnail}} />
      <ContentWrapper>
        <LeftWrapper>
          <Name>{name}</Name>
        </LeftWrapper>
        <RightWrapper>
          <DetailButton onPress={() => onPress()}>
            <ArrowIcon width="25" height="25" />
          </DetailButton>
        </RightWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default HeroCard;
