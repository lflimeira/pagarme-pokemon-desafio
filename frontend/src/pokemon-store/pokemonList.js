import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(pokemon => (
            <tr key={pokemon.id}>
                <td>
                    {pokemon.name}
                </td>
                <td>
                    {pokemon.price}
                </td>
                <td>
                    {pokemon.stock}
                </td>
                <td>
                    <IconButton styles='success' textButton='Buy' onClick={() => props.handleBuy(pokemon.id)}></IconButton>
                </td>
            </tr>
        ))
    }

    return(
        <table className='table table-striped table-bordered table-hover col-md-12 table-pokemon'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}