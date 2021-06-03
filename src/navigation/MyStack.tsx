import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Theme from '../theme';

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
          name="Home"
          component={HomeScreen}
          options={navigationOptions}
        />
        <Stack.Screen
          name="Create"
          component={HomeScreen}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;