import React from 'react'
import IconButton from '../template/iconButton'

export default props => (
    <div>
        <div role="form" className="pokemonForm">
            <div className="col-xs-12 col-sm-7 col-md-7">
                <input id="name" className="form-control" placeholder="Pokemon name"></input>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2">
                <input type="number" id="price" className="form-control" placeholder="Price"></input>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2">
                <input type="number" id="stock" className="form-control" placeholder="Stock"></input>
            </div>
            <div className="col-xs-12 col-sm-1 col-md-1">
                <IconButton styles={"primary"} icon="plus" 
                    onClick={props.handleAdd}></IconButton>
            </div>
        </div>
    </div>
)