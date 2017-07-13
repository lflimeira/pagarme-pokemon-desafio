import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'

import PokemonStore from '../pokemon-store/pokemon-store'
import Welcome from '../pokemon-store/welcome'
import PokemonBuy from '../pokemon-store/pokemon-buy'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Welcome} />
        <Route path='/store' component={PokemonStore} />
        <Route path='/buy/:id' component={PokemonBuy} />
        <Redirect from='*' to='/' />
    </Router>
)