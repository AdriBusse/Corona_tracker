import React, {createContext, useReducer} from 'react';
import AppReducer from './GlobalReducer';
//initial State
const initialState = {
    search: ""
}

// create Context bei größeren apps kann der context auch gesplitted werden
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state,
        dispatch] = useReducer(AppReducer, initialState);
    
   //Action  
        function updateSearch(x){
        dispatch({type:"CHANGE_SEARCH", payload: x})

    }

 

    return (
        <GlobalContext.Provider
            value={{
            search: state.search,
            updateSearch
        }}>
            {children}
        </GlobalContext.Provider>
    )

}