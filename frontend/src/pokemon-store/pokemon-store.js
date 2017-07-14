import React, { Component } from 'react'
import axios from 'axios'
import { hashHistory  } from 'react-router'

import PokemonForm from './pokemonForm'
import PokemonList from './pokemonList'

const URL = 'http://localhost:3000/pokemons/'
let token = ''

class PokemonStore extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [] }

        this.handleAdd = this.handleAdd.bind(this)
    }

    refresh(){
        axios.get(URL,
        {
          headers: {'x-access-token': token }
        }).then(resp => this.setState({...this.state, list: resp.data}) )
    }

    handleBuy(id){
        hashHistory.push(`/buy/${id}`);
    }

    handleAdd() {
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const stock = document.getElementById('stock').value
        axios.post(URL,
        {
            name: name,
            price: price,
            stock: stock
        },
        {
          headers: {'x-access-token': token }
        })
        .then(function (resp) {
            if(resp.status === 200){
                alert(resp.data.name + ' successfully registered.')
                document.getElementById('name').value = ""
                document.getElementById('price').value = ""
                document.getElementById('stock').value = ""
            }
        })
        .catch(function (error) {
            if (error.response !== undefined) {
                if(error.response.status === 400){
                    alert(error.response.data.error)
                }
            }
        })
        this.refresh()
    }

    componentDidMount(){
        if (document.getElementById('token').value === "") {
           hashHistory.push('/');
        }else{
            token = document.getElementById('token').value
            this.refresh()
        }
    }

    render(){
        return(
            <div className="col-md-12 store">
                <PokemonForm handleAdd={this.handleAdd} />
                <PokemonList list={this.state.list} handleBuy={this.handleBuy}/>
            </div>
        )
    }
}

export default PokemonStore;
