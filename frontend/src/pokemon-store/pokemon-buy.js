import React, { Component } from 'react'
import axios from 'axios'
import { hashHistory  } from 'react-router'

import PokemonFormCard from './pokemonFormCard'

const URL = 'http://localhost:3000/pokemons/buy/'
let token = ''

class PokemonBuy extends Component {
    constructor(props) {
        super(props);

        this.handleCard = this.handleCard.bind(this)
    }

    handleCard(){
        const id = document.getElementById('id').value
        const quantity = document.getElementById('quantity').value
        const card_number = document.getElementById('card_number').value
        const card_exp_date = document.getElementById('card_exp_date').value
        const card_holder_name = document.getElementById('card_holder_name').value
        const card_cvv = document.getElementById('card_cvv').value

        axios.put(URL+id,
            {
                quantity: quantity,
                card_number: card_number,
                card_exp_date: card_exp_date,
                card_holder_name: card_holder_name,
                card_cvv: card_cvv
            },
            {
                headers: {'x-access-token': token }
            }
        )
        .then(function (resp) {
            if(resp.status === 200){
                console.log(resp)
                alert(resp.data.metadata.quantity+' '+resp.data.metadata.name+ ' purchased successfully.')
                hashHistory.push('/store');
            }
        })
        .catch(function (error) {
            if (error.response !== undefined) {
                if(error.response.status === 400){
                    alert(error.response.data.error)
                }
            }
        })
    }

    componentDidMount(){
        if (document.getElementById('token').value === "") {
           hashHistory.push('/');
        }else{
            token = document.getElementById('token').value
        }
    }

    render(){
        const { params } = this.props;

        if(!params.id) return null;
        
        return(
            <div className="col-md-6 col-md-offset-3 welcome">
                <PokemonFormCard handleCard={this.handleCard} pokemonId={params.id} />
            </div>
        )
    }
}

export default PokemonBuy;
