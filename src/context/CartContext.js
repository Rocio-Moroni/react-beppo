/* IMPORTS */

// React import
import { createContext, useState } from 'react';


/* COMPONENTS */
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) =>{

        // When products with the same itemName are added, add them together
        if (isInCart(product.itemName)) {
            addSameProducts(product.itemName, quantity)
        } else {
            setCart([...cart, {...product, quantity}])
        }
    };

    // Recognize if products with the same itemName are added to the cart
    const isInCart = (itemName) => {
        return cart.some((product) => product.itemName === itemName)
    };
    // Add products with the same itemName between them
    const addSameProducts = (itemName, quantity) => {
        cart.map(
            (product) => product.itemName === itemName && (product.quantity += quantity)
        );
    };

        //MANU ME FALTA PONER EN PRACTICA LAS SIGUIENTES FUNCIONES

    // // Clear the products added to the cart
    // const clearProducts = () => {
    //     setCart([])
    // };

    // // Remove a product from the cart, leave the others products which were not removed
    // const removeProducts = (itemName) => {
    //     const filteredProducts = cart.filter((product) => product.itemName !== itemName);
    //     setCart(filteredProducts);
    // };




    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
};

