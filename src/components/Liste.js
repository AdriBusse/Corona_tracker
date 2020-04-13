import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Display from './Display';
import {GetCountries} from '../querrys/querrys';

import countries from 'react-select-country-list'



function Liste(){
    const { loading, error, data } = useQuery(GetCountries);
    if (loading) return <p>Loading...</p>
    if(error) return <p>error: {error}</p>
    if(data){
    data.countries.sort((a,b)=>{return b.mostRecent.confirmed-a.mostRecent.confirmed})
    }
return(
    <div>
        {
            data.countries.map(data=>{
                const recovered= data.mostRecent.recovered;
                const confirmed= data.mostRecent.confirmed;
                const country = data.name; 
                const deaths= data.mostRecent.deaths;
                return <div key={country}>
                        <Display key={country} d={deaths} r={recovered} c={confirmed} country={country}/>
                        <hr/>
                       </div>
            })
        }
    </div>

)
}





export default Liste; 