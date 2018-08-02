const initialState = {}

export default function rootReducer( state= initialState, action ) {
   switch( action.type ){
        case 'CITY_NAMES' :
            return state = { ...state,  names: action.names  }
        default: return  state 
   }
} 
