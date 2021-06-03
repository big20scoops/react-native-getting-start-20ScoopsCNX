import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Theme from '../theme';
import { NavigationName } from './navigationName';
import CreateScreen from '../screens/CreateScreen';

const Stack = createStackNavigator();

const navigationOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Theme.colors.brand,
  },
  headerTitleStyle: { alignSelf: 'center' },
  headerTintColor: Theme.colors.white,
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationName.HOME}
          component={HomeScreen}
          options={navigationOptions}
        />
        <Stack.Screen
          name={NavigationName.CREATE}
          component={CreateScreen}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;