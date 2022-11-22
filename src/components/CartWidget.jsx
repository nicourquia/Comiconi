import { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { BsCart } from "react-icons/bs"
import CartProvider from "../context/CartContext"

const CartWidget = () => {

    const cartContext = useContext(CartContext);
    const {cartProducts} = cartContext

    return(
            <div>
                <li>
                    <Link to="/cart">
                        <div>
                            {cartProducts.length}
                        </div>
                        <i>
                            <BsCart alt="Carrito"></BsCart>
                        </i>
                    </Link>
                </li>
                <CartProvider>
                ... Routes
                </CartProvider>
            </div>
    )
}

export default CartWidget;