import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components'

import MyStack from './src/navigation/MyStack';
import theme from './src/theme'


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <MyStack />
    </ThemeProvider>
  );
};

export default App;
