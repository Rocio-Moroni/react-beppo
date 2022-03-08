/* IMPORTS */

// CSS import
import './ItemCart.css';
// Components import
import CartContext from '../../context/CartContext';
// React import
import React, { useContext } from "react";


/* COMPONENTS */

// ItemCart component

export const ItemCart = ({ item } ) => {

    // We bring from our CartContext the functions for adding and removing products from the shopping cart.
    const { DeleteItemFromCart, AddItemToCart, RemoveProducts } = useContext(CartContext);

    // We destructure Item for obtaining the id information.
    const { itemName } = item;

    return (
        <div className='Container'>
            <div className='ImageContainer'>
                <img className='ItemCImage' src={item.img} alt={item.itemName} />
            </div>
            <div className='CartCInfo'>
                <div className='CartInfoLeft'>
                    <p className='ItemCName'>{item.itemName}</p>
                    <div className='ItemCTotalPriceContainer'>
                        <p className='ItemCTotalPrice'> Subtotal: AR${item.quantity * item.price} </p>
                    </div>
                    <p className='ItemCInformation'> {item.info} </p>
                    <div className='AddRemoveButtons'>
                        <div className='ItemCQuantity'>Quantity: {item.quantity}</div>
                        <button className='BtnAdd custom-btn AddRemoveButtons' onClick={() => AddItemToCart(item)}> ADD </button>
                        <button className='BtnRemove custom-btn AddRemoveButtons' onClick={() => DeleteItemFromCart(item.itemName)}> REMOVE </button>
                    </div>
                </div>
                <div className='Cross'>
                    <p className='Remove' onClick={() => RemoveProducts(item.itemName)}> x </p>
                </div>
            </div>
        </div>
    );
};
