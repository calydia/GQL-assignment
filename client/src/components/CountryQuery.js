import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

function CountryQuery() {
  return (
    <Query query={gql`{
        countries {
          name
        }
      }
    `}>
    {({loading, error, data}) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Whoopsie :(</p>;
      
      return data.countries.map(({name}) => (
        <div key={name} className="country-item">
          {name}
        </div>
      ));
    }}
    </Query>
  );
}

export default CountryQuery;
