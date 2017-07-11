import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'

import PokemonStore from '../pokemon-store/pokemon-store'
import Welcome from '../pokemon-store/welcome'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Welcome} />
        <Route path='/store' component={PokemonStore} />
        <Redirect from='*' to='/' />
    </Router>
)