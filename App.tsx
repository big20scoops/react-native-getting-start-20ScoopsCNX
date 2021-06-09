import 'react-native-gesture-handler';

import React from 'react';
import {ThemeProvider} from 'styled-components';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import MyStack from './src/navigation/MyStack';
import theme from './src/theme';

const client = new ApolloClient({
  uri: 'https://hero-graphql.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <MyStack />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
