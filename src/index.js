import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './router'
import { store } from './reducers/store'

render( (
    <Provider store={ store } >
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
), document.getElementById( 'app' ) )
