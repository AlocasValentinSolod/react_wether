import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cityNames } from './actions/actions';


class wetherApi extends Component {
   

    componentDidMount () {
        const API = 'http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10'
        const APPID = '&APPID=a3f49b01aa111337a90b621b60ca5e18'
        fetch( API + APPID )
            .then( response => {
                if ( response.ok ) {
                    return response.json();
                } else {
                    throw new Error( 'Something  wrong ...' )
                }
            } )
            .then( data => {
                const cityName = data.list.map( city => city.name )
                this.props.dispatch( cityNames( cityName ) )
            } ) 
    }

    render () {
        return (
            <ul>
               { this.props.state.names ? this.props.state.names.map( ( name, key ) =>  <li key={ key } > { name } </li> ) : null }
            </ul>
        )
    };
}
  
function mapStateToProps (state) {
    return {
      state
    }
  }

export default connect(mapStateToProps)(wetherApi)
