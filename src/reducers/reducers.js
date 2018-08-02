import { CITY_NAMES } from '../actions/actions'

const initialState = {
    names: []
}

export default rootReducer = ( state = initialState, action => {
    switch ( action.type ) {
        case 'CITY_NAMES':
            return {
                state,
                names: action.names
            }
        default:
            return {
                state
            }
     }
} )


