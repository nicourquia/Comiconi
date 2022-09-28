import React from 'react'
import CardProduct from './CardProduct';

const ItemListContainer = (props) => {
    const {data} = props
    return(
            <div>
                <p>Usuario: {data.nombre} {data.apellido}</p>
                <p>Item List Container</p>
                <CardProduct/>
            </div>
    )
}

export default ItemListContainer;