import React from 'react'
import IconButton from '../template/iconButton'

export default props => (
    <div>
        <div role="form" className="pokemonFormCard">
            <h4>Enter the amount you want to buy and the data of your card</h4>
            <input type="hidden" id="id" value={props.pokemonId}/>
            <div className="col-xs-6 col-sm-6 col-md-6">
                <input id="quantity" className="form-control" placeholder="Pokemon quantity"></input>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
                <input id="card_number" className="form-control" placeholder="Card number" defaultValue="4024007138010896"></input>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
                <input id="card_holder_name" className="form-control" placeholder="Card holder name" defaultValue="Ash Ketchum"></input>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
                <input id="card_exp_date" className="form-control" placeholder="Card expiration date" defaultValue="1050"></input>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
                <input id="card_cvv" className="form-control" placeholder="Card cvv" defaultValue="123"></input>
            </div>
            <div className="col-xs-12 col-sm-1 col-md-1">
                <IconButton styles={"primary"} textButton="Finalize purchase"
                    onClick={props.handleCard}></IconButton>
            </div>
        </div>
    </div>
)
