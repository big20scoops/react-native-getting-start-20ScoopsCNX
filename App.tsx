import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import MyStack from './src/navigation/MyStack';
import theme from './src/theme'

const client = new ApolloClient({
  uri: 'https://hero-graphql.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

const App = () => {

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <MyStack />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
