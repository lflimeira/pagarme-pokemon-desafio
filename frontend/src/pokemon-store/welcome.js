import React, { Component } from 'react'
import pokeball from '../main/images/pokeball.png';


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.getToken = this.getToken.bind(this)
    }

    getToken() {
        document.getElementById('token').value = "Token here"
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
