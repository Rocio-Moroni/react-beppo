/* IMPORTS */

// CSS import
import './ItemDinamicCart.css';
// Components import
import CartContext from '../../context/CartContext';
// React import
import React, { useContext } from "react";


/* COMPONENTS */

// ItemCart component

export const ItemDinamicCart = ({ item }) => {
    // We bring from our CartContext the functions for adding and removing products from the shopping cart.
    const { DeleteItemFromCart, AddItemToCart } = useContext(CartContext);

    // We destructure Item for obtaining the id information.
    const { itemName } = item;

    return (
        <div className='ItemCartContainer'>
            <div className='CartItem'>
                <img className='ImgCart' src={item.img} alt={item.itemName} />
                <div className='CartInfo'>
                    <div>
                        <p className='ItemName'>{item.itemName}</p>
                        <div className='ItemQuantity'>{item.quantity}</div>
                        <div>
                            <button className='BtnAddRemove' onClick={() => AddItemToCart(itemName)}> ADD </button>
                            <button className='BtnAddRemove' onClick={() => DeleteItemFromCart(item)}> REMOVE </button>
                        </div>
                    </div>
                    <div>
                        <p className='ItemTotalPrice'> ${item.quantity * item.price} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

