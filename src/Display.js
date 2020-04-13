import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GetVietnam = gql`
{
  countries(names:["US"]){
  name
    mostRecent{
      confirmed
      deaths
      recovered
      recovered
      
    }

}
}
`

function Display({d, r, c, country}){


    

    return(

        <div>
            <h1>{country} has {c-r} active Corona Cases</h1>     
            <h2>{c} cases at all</h2>
            <h2>{d} death cases</h2>
        </div>
    )
}

export default Display;