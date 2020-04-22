import React from 'react';

import {useQuery} from '@apollo/react-hooks';

//components
import Liste from './components/Liste';
import Banner from './components/Banner';
import Searchbar from './components/Searchbar';


import {GetCountries} from './querrys/GetCountriesQuery';







function App() {
  const { loading, error, data } = useQuery(GetCountries);
  if (loading) return <p>Loading...</p>
  if(error) return <p>error: {error}</p>
  return (
    <div className="grey lighten-1">
      <Banner data={data}/>
    <div className="App grey lighten-1 container">
      <Searchbar className="center" data={data}/>
      <Liste data={data} />
    </div>
    </div>

  );
}

export default App;
