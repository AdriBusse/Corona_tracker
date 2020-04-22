import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';



export default function Searchbar(props) {
  const onInputChange=(e)=>{
    context.updateSearch(e.target.value)
  }
  const context = useContext(GlobalContext)

    return (
        <div className="listcontainer" >
        <form >
          <div >
            <div className="input-field  ">
              <i className="material-icons prefix">search</i>
              <input placeholder="search for Country" id="icon_prefix2" onChange={onInputChange} className="materialize-textarea" list="suggestions" autoComplete="on"></input>
              
            
            </div>
          </div>
        </form>

        
          
          <datalist id="suggestions">
            {
            props.data.countries.map((x,i)=>{
              return <option key={i} value={x.name}/>
              
            })
            }
          </datalist>
        

      </div>
    )
}
