import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

import {GlobalProvider} from './context/GlobalState';
import App from './App';


const client = new ApolloClient({
  uri: 'https://covid19-graphql.now.sh/'
});






function AppApolloRouter() {

  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <App/>
      </GlobalProvider>
    </ApolloProvider>
  );
}

export default AppApolloRouter;
