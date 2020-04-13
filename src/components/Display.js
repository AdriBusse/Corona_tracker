import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import countries from 'react-select-country-list';
import ReactCountryFlag from "react-country-flag";
import noFlag from '../utilitys/noFlag.png';
import numberWithCommas from '../utilitys/numberWithCommas.js'

function Display({d, r, c, country}){


      const isoCode=countries().getValue(country);
      function getFlag(code){
        if(typeof isoCode === 'undefined'){
            return <img src={noFlag} alt="noFlag" style={{
              width: '2em',
              Height: '2em'
          }}/>
            
        }else{
            return(
              <ReactCountryFlag
              className="emojiFlag"
              countryCode={isoCode}
              code={isoCode}
              style={{
                  fontSize: '2em',
                  lineHeight: '2em',
              }}
              svg
          />

            )
        }
      }

    return(

        <div>
            {getFlag(isoCode)}
            <h1>{country} has {numberWithCommas(c-r)} active Corona Cases</h1>     
            <h2>{numberWithCommas(c)} cases at all</h2>
            <h2>{numberWithCommas(d)} death cases</h2>
        </div>
    )
}

export default Display;