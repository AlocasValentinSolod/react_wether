import React, { Component } from 'react'

class wetherApi extends Component {
    constructor () {
        super()
        this.state = {
            data: null,
            isLoading: false,
            error: null,
        }
    }

    componentDidMount () {
        const API = 'http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10'
        const APPID = '&APPID=a3f49b01aa111337a90b621b60ca5e18'
        this.setState( { isLoading: true } )
        fetch( API + APPID )
            .then( response => {
                if ( response.ok ) {
                    return response.json()
                } else {
                    throw new Error( 'Something  wrong ...' )
                }
            } )
            .then( data => {
                const cityName = data.list.map( city => city.name )
                this.setState( { data: cityName, isLoading: false } )
            } )
            .catch( error => this.setState( { error, isLoading: false } ) )
    }

    render () {
        return (
            <ul>
                { this.state.data ? this.state.data.map( ( city ) => { return ( <li> { city } </li> ) } ) : null
                }
            </ul>
        )
    };
}

export default wetherApi
