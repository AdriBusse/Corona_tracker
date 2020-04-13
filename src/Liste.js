import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Display from './Display';

const GetCountries = gql`
{
  countries(names:[]){
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

function Liste(){
    const { loading, error, data } = useQuery(GetCountries);
    if (loading) return <p>Loading...</p>
    if(error) return <p>error: {error}</p>
    console.log(data)
return(
    <div>
        {
            data.countries.map(data=>{
                const recovered= data.mostRecent.recovered;
                const confirmed= data.mostRecent.confirmed;
                const country = data.name; 
                const deaths= data.mostRecent.deaths;
                return <div>
                        <Display key={country} d={deaths} r={recovered} c={confirmed} country={country}/>
                        <hr/>
                       </div>
            })
        }
    </div>

)
}





export default Liste; 