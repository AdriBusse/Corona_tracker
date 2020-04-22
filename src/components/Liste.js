import React,{useContext} from 'react';
import CountryCard from './CountryCard';
import {GlobalContext} from '../context/GlobalState';






function Liste(props){
const {search} =useContext(GlobalContext);
let displayedCountries = props.data.countries;

    if (props.data == null){}else{
        props.data.countries.sort((a,b)=>{return b.mostRecent.confirmed-a.mostRecent.confirmed})
       
        displayedCountries= displayedCountries.filter(x=>{return x.name.toLowerCase().includes(search) })
        

    }
return(
    <div className="listcontainer">
        {
            displayedCountries.map(data=>{
                const recovered= data.mostRecent.recovered;
                const confirmed= data.mostRecent.confirmed;
                const country = data.name; 
                const deaths= data.mostRecent.deaths;
                return <div key={country}>
                        <CountryCard key={country} d={deaths} r={recovered} c={confirmed} country={country}/>
                        <hr/>
                       </div>
            })
        }
    </div>

)
}





export default Liste; 