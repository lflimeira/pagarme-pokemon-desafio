import React, { Component } from 'react'
import PokemonForm from './pokemonForm'
import PokemonList from './pokemonList'


class PokemonStore extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        console.log('Add')
    }

    render(){
        return(
            <div className="col-md-12 store">
                <PokemonForm handleAdd={this.handleAdd} />
                <PokemonList />
            </div>
        )
    }
}

export default PokemonStore;
