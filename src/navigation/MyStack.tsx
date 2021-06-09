import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Theme from '../theme';
import {NavigationName} from './navigationName';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

const navigationOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Theme.colors.brand,
  },
  headerTintColor: Theme.colors.white,
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationName.HEROES}
          component={HomeScreen}
          options={{
            ...navigationOptions,
            headerTitleStyle: {alignSelf: 'center'},
          }}
        />
        <Stack.Screen
          name={NavigationName.DETAIL}
          component={DetailScreen}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
