import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components/native';
import { useQuery, gql } from '@apollo/client';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationName } from '../navigation/navigationName';
import { RootStackParamList } from './rootStackPrams';
import { FlatList } from 'react-native-gesture-handler';
import HeroCard from '../components/HeroCard';
import { Text } from 'react-native';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
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

  const renderItem = ({ item }) => {
    const { name, images: { sm: thumbnail } } = item;
    return (
      <HeroCard 
        name={name}
        thumbnail={thumbnail}
      />
    )
  };

  const renderHeroList = useCallback(() => {
    return (
      <FlatList
        data={data.heros}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    )
  }, [data])
  
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{`Error! ${error.message}`}</Text>;

  return (
    <Container>
      {renderHeroList()}
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
      images {
        sm
      }
    }
  }
`;

export default HomeScreen;
