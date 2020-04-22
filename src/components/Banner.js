import React from 'react'

import numberWithCommas from '../utilitys/numberWithCommas.js'
 


export default function Banner(props) {
    let allcases = 0;
    let alldeaths= 0;
    let allrecovered= 0;
    let activeCases= 0;
    //let date= 0;
    if(props.data == null){

    }
    else{
        var data = props.data;
        allcases= data.countries.reduce((acc, cur)=>acc+cur.mostRecent.confirmed,0)
        alldeaths= data.countries.reduce((acc, cur)=>acc+cur.mostRecent.deaths,0)
        allrecovered= data.countries.reduce((acc, cur)=>acc+cur.mostRecent.recovered,0)
        activeCases= allcases-alldeaths-allrecovered

    }

    return (
        <div className="navbar-fixed "> 
<nav className="nav-extended indigo darken-3">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo center">Live Corona</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><a href="#">Corona Cases: {numberWithCommas(allcases)}</a></li>
        <li className="tab"><a href="#">Active Cases: {numberWithCommas(activeCases)}</a></li>
        <li className="tab"><a href="#">Deaths: {numberWithCommas(alldeaths)}</a></li>
        <li className="tab left"><a href="#">Stay home!</a></li>
      </ul>
    </div>
  </nav>
  </div>


    )
}
