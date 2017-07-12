import React, { Component } from 'react'
import axios from 'axios'

import pokeball from '../main/images/pokeball.png';

const URL = 'http://localhost:3000/token'

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.getToken = this.getToken.bind(this)
    }

    getToken() {
        axios.get(URL)
        .then(function (resp) {
            document.getElementById('token').value = resp.data.token
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){
        return(
            <div onLoad={this.getToken} className="col-md-6 col-md-offset-3 welcome">
                <img src={pokeball} className="App-pokeball" alt="pokeball" />
                <h2>Welcome to the Pokemon Store.</h2>
                <a href="#/store" className="btn Access-btn storeAccess">Store Access</a>
            </div>
        )
    }
}

export default Welcome;
