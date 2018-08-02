import React from 'react'
import { Switch, Route } from 'react-router-dom'
import likesCount from './likesCount'
// import wetherApi from './wetherApi'

class Router extends React.Component {
    render () {
        return (
            <Switch>
                {/* <Route exact path='/' component={ wetherApi } /> */}
                <Route path='/weher' component={ likesCount } />
            </Switch>
        )
    }
}

export default Router
