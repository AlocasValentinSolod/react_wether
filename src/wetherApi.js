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
                const cityStatus = data.list.map( cityStatus => cityStatus )
                this.props.dispatch( cityNames( cityStatus ) )
            } )
            .catch( error => {
                console.log( 'dataAPI.fetch error in wetherApi Component ! type -> ' + error)
            } )
    }


    createCityBlock = ( city , key ) => {
        return (
            <div className={ "cityblock" } key={ key } >
                <p> { city.id } </p>
                <p> { city.name } </p>
                <p> { city.main.temp }</p>
            </div>
        )
    }

    RenderCity = citys => {
        return(
            citys.map( ( city, key ) => {
                return (
                    this.createCityBlock( city, key )
                )
            }
        )
    ) }

    render () {
        return (
            <div>
                {/* <button onClick={ () =>  this.RenderCity( this.props.state ) } >Render CityBlock</button> */}
                <div id={ 'block' } > { this.props.state ? this.RenderCity( this.props.state ) : <p>Loading</p> } </div>
            </div>
        )
    };
}
  
function mapStateToProps (state) {
    return {
      state: state.cityStatus
    }
  }

export default connect(mapStateToProps)(wetherApi)
