import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './router.jsx'

render( (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
), document.getElementById( 'app' ) )
