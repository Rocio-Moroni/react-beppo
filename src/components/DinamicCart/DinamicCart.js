/* IMPORTS */

// CSS import
import './DinamicCart.css'
// Component import
import CartContext from '../../context/CartContext';
import { ItemDinamicCart } from "../ItemDinamicCart/ItemDinamicCart";
import CartWidget from '../CartWidget/CartWidget';
import CrossWidget from '../CrossWidget/CrossWidget';
import SeparationLine from '../SeparationLine/SeparationLine';
// React import
import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineEmojiSad } from "react-icons/hi";
import { Link } from 'react-router-dom';



/* COMPONENTS */

// DinamicCart component
const DinamicCart = () => {

    // Creation of 2 states, one for knowing if the shopping cart its opened or not, the other one for obtaining the amount of products we've got in our cart.
    const [cartOpen, setCartOpen] = useState(false);
    const [productsLength, setProductsLength] = useState(0);

    // We bring from CartContext the products from the shopping cart.
    const { cartItems, ClearProducts } = useContext(CartContext);

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
        <div className='CartContainer'>
            <div className='ButtonCartContainer' onClick={() => setCartOpen(!cartOpen)}>
                <div className='ButtonCart'>
                    {!cartOpen ? (
                        <div>
                            <CartWidget/>
                        </div>
                    ) : (
                        <div>
                            <CrossWidget />
                        </div>
                    )}
                </div>
                {!cartOpen && (
                    <div className='ProductsNumber'>{productsLength}</div>
                )}
            </div>
            {cartItems && cartOpen && (
                <div className='Cart'>
                    <h2 className='CartTitle'> SHOPPING CART </h2>
                    <SeparationLine />

                    {cartItems.length === 0 ? (
                        <div className='EmptyCartContainer'>
                            <p className='EmptyCart'> Your shopping cart is empty <span className='SadFace'><HiOutlineEmojiSad size="1.2em" /></span> </p>
                            <Link to= {`/`} className='ClickStart'>CLICK HERE TO START</Link>
                        </div>
                    ) : (
                        <div className='productsContainer'>
                            {cartItems.map((item,i) => (
                                <ItemDinamicCart key={i} item={item}></ItemDinamicCart>
                            ))}
                        </div>
                    )}
                    <SeparationLine />
                    <h2 className='CartTotal'> TOTAL: AR${total} </h2>
                    <div className='ButtonsDinamicCart'>
                        <button className='BtnDinamicCart' onClick={() => ClearProducts()}> DELETE CART <span> LET'S START OVER! </span></button>
                        <Link className='BtnDinamicCart' to= {`/cart`}> PAY NOW <span> IT'S ALMOST YOURS! </span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DinamicCart;