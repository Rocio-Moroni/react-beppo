/* IMPORTS */

// CSS import
import './Cart.css'
// Component import
import CartContext from '../../context/CartContext';
import { ItemCart } from "../ItemCart/ItemCart";
// React import
import React, { useContext, useState, useEffect } from 'react';


/* COMPONENTS*/

// Cart component
const Cart = ({ item }) => {

    // Creation of state for obtaining the amount of products we've got in our cart.
    const [productsLength, setProductsLength] = useState(0);

    // We bring from CartContext the products from the shopping cart.
    const { cartItems } = useContext(CartContext);

    // Everytime the shopping cart is modified, we update the amount of products.
    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.quantity, 0)
        );
    }, [cartItems]);

    // Calculation of the total price.
    const total = cartItems.reduce(
        (previous, current) => previous + current.quantity * current.price, 0
    );

    return (
        <div className='CartCompleteContainer'>
            <div className='Intro'>
                <h3 className='Title'> REVIEW ORDER </h3>
                <p> TOTAL ({productsLength} products) <strong>AR${total}</strong></p>
            </div>
            <div>
                {cartItems.map((item,i) => (
                    <ItemCart key={i} item={item}></ItemCart>
                ))}
            </div>
            <div>

            </div>
        </div>
    )
    
}

export default Cart;