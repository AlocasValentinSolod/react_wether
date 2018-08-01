import React, { Component } from 'react'


class wetherApi extends Component {
    constructor () {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount () {
        const API = 'http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10'
        const APPID = '&APPID=a3f49b01aa111337a90b621b60ca5e18'
        console.log(this.ready)
        this.setState( { isLoading: true } )
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
                cityName ? this.setState( { data: cityName, isLoading: false } ) : new Error()
            } )
            .catch( error => error ? this.setState( { error, isLoading: true } ) : this.setState( { error, isLoading: true } ) )
    }

    render () {
        this.ready = true
        return (

            <ul>
                {
                    this.state.isLoading ? <p> isLoading </p> : this.state.data ? this.state.data.map( ( city, key ) => { return ( <li key={ key }> { city } </li> ) } ) : null
                }
            </ul>
        )
    };
}

export default wetherApi
