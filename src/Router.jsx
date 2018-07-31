import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { likesCount } from './likesCount'

class Router extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path='/' component={ likesCount } />
            </Switch>
        )
    }
}

export default Router
