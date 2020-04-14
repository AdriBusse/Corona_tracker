import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import {GetCountries} from '../querrys/querrys';
import numberWithCommas from '../utilitys/numberWithCommas.js'
 


export default function Banner() {
    const { loading, error, data } = useQuery(GetCountries);
    let allcases = 0;
    let alldeaths= 0;
    let allrecovered= 0;
    let activeCases= 0;
    let date= 0;
    if(data){
        allcases= data.countries.reduce((acc, cur)=>acc+cur.mostRecent.confirmed,0)
        alldeaths= data.countries.reduce((acc, cur)=>acc+cur.mostRecent.deaths,0)
        allrecovered= data.countries.reduce((acc, cur)=>acc+cur.mostRecent.recovered,0)
        activeCases= allcases-alldeaths-allrecovered

    }

    return (
        <div className="navbar-fixed "> 
<nav class="nav-extended indigo darken-3">
    <div className="nav-wrapper">
      <a className="brand-logo center">Live Corona</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a>Corona Cases: {numberWithCommas(allcases)}</a></li>
        <li class="tab"><a>Active Cases: {numberWithCommas(activeCases)}</a></li>
        <li class="tab"><a>Deaths: {numberWithCommas(alldeaths)}</a></li>
      </ul>
    </div>
  </nav>
  </div>


    )
}
