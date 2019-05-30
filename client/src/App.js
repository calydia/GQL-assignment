import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import CountryQuery from './components/CountryQuery.js'
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient ({
  uri: 'http://localhost:4000'
});

function App() {
  return (

    <ApolloProvider client={client}>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CountryQuery></CountryQuery>
      </div>
    </ApolloProvider>
  );
}

export default App;
