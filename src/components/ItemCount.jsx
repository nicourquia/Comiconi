import { useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { BsCart } from "react-icons/bs"
import { CartContext } from "../context/CartContext"
import CartProvider from "../context/CartContext"

const ItemCount = (setQuantitySelected, productData) => {
    const {addproductToCart} = useContext(CartContext)
    const [countQuantity, setCountQuantity] = useState(1)

    const addQuantity = () => {
        setCountQuantity (countQuantity + 1)
    }

    const removeQuantity = () => {
        if(countQuantity > 0)
        setCountQuantity (countQuantity - 1)
    }

    const onAdd = () => {
        console.log("Agregar al carrito", productData)
        addproductToCart(productData, countQuantity)
        setQuantitySelected (countQuantity)
    }

    return(
        <div>
            <div>
                <Button onclick={removeQuantity}>-</Button>
                <span>{countQuantity}</span>
                <Button onclick={addQuantity}>+</Button>
            </div>
            <Button>Agregar<BsCart/></Button>
            
        </div>

        
    )
}

export default ItemCount;