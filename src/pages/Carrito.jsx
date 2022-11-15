import React from 'react'
import { Button } from 'react-bootstrap'

function Carrito(){
    return(
        <div>
            <h1>Carrito</h1>
            <ul>
                <li>banana</li>
                <li>manzana</li>
                <li>pera</li>
                <li>naranja</li>
            </ul>
            <Button>Finalizar Compra</Button>
        </div>
    )
}

export default Carrito;