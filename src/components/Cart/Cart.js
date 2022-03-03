/* IMPORTS */

// Component import
import { CartContext } from '../../context/CartContext';
// React import
import React, { useContext } from 'react';


/* COMPONENTS */

// Cart component
const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            {cart.map((prod) => (
                <li key={prod.itemName}> {prod.quantity} </li>
            ))}
        </>
    );
};

export default Cart;
