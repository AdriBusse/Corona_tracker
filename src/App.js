import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import {useQuery} from '@apollo/react-hooks';
import { ApolloProvider } from '@apollo/react-hooks';

import Liste from './components/Liste';


const client = new ApolloClient({
  uri: 'https://covid19-graphql.now.sh/'
});






function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Liste/>
    </div>
    </ApolloProvider>
  );
}

export default App;
