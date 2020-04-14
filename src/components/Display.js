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
            <h3>{country} has {numberWithCommas(c-r-d)} active Corona Cases</h3>     
            <h4>{numberWithCommas(c)} cases at all</h4>
            <h4>{numberWithCommas(d)} death cases</h4>
            
        </div>
    )
}

export default Display;