import { createContext, useState } from 'react'
const CartContext = createContext ()

const CartProvider = ([children]) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

    const addproductToCart = (product, counter) => {
        const isProductInCart = cartProducts.find((cartItem) => cartItem.id === product.id)
            if (isProductInCart){
                if(isProductInCart.countQuantity + counter > isProductInCart.stock)
                return false
                isProductInCart.countQuantity += counter
            } else {
                product.countQuantity = counter;
                setCartProducts([...cartProducts, product])
            }
            setTotalProducts(totalProducts + counter)
    }


}

export { CartContext };