//Reducers are state change actions

export default (state, action)=>{
    switch(action.type){
        case 'CHANGE_SEARCH':
            return{
                ...state,
                search: action.payload
            }
        
        default:
            return state;
    }
}
