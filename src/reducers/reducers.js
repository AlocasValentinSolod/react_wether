const initialState = {}

export default function rootReducer( state= initialState, action ) {
   switch( action.type ){
        case 'CITY_NAMES' :
            return state = { ...state,  cityStatus: action.cityStatus  }
        default: return  state 
   }
} 
