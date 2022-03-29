/* IMPORTS */

// Component import
import { useNotificationServices } from '../services/notification/NotificationServices';
// React import
import { createContext, useEffect, useState } from 'react';


/* COMPONENTS */

// Creation of our context.
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const setNotification = useNotificationServices();

    // Creation of a state for our shopping cart.
    const [cartItems, setCartItems] = useState(() => {

        try {
            // Local Storage verification: If there are products in the LS, we parsed them and if there is nothing, we return an empty array.
            const productsInLocalStorage = localStorage.getItem("cartProducts");
            return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
        } catch (error) {
            return [];
        };
    });


    // Everytime the shopping cart is refreshed, we set the Local Storage for products to be saved in it.
    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
    }, [cartItems]);


    // Function for adding products to the shopping cart.
    const AddItemToCart = (product, quantity) => {

        // Recognize if products with the same itemName are added to the cart.
        const inCart = cartItems.find(
            (productInCart) => productInCart.itemName === product.itemName
        );

        // If the product that was added is already saved in the shopping cart (with the same itemName), we map the cart and we add it to the product with the same itemName.
        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.itemName === product.itemName) {
                        return {...inCart, quantity: inCart.quantity + quantity}
                    } else return productInCart;
                })
            );
        // If the added product is not in the shopping cart, we add it.
        } else {
            setCartItems([...cartItems, {...product, quantity}])
        }
    };


    // Function for removing products from the shopping cart.
    const DeleteItemFromCart = (product, quantity) => {

        // Searching of the product by its itemName.
        const inCart = cartItems.find(
            (productInCart) => productInCart.itemName === product
        );

        // If the amount of the product that we want to remove its equal to 1, we filter the cart and we delete it from it.
        if (inCart.quantity === 1) {
            setCartItems(
                cartItems.filter((productInCart) => productInCart.itemName !== product)
            );
        // If the amount of the product that we want to remove is bigger to 1, we map the shopping cart, and we rest 1 item from its total amount.
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.itemName === product) {
                        return {...inCart, quantity: inCart.quantity - 1};
                    // If none of the above conditions are met, return the shopping cart as it was.
                    } else return productInCart;
                })
            );
        }
    }

    // Function for removing all products from the shopping cart.
    const ClearProducts = () => {
        setCartItems([])
        setNotification('error', `Your Shopping Cart was deleted`);
    };

    // Function for removing a product from the cart, leaving the other products which were not removed.
    const RemoveProducts = (itemName) => {
    const filteredProducts = cartItems.filter((product) => product.itemName !== itemName);
        setCartItems(filteredProducts);
    };


    return (
        <CartContext.Provider value={{ cartItems, AddItemToCart, DeleteItemFromCart, ClearProducts, RemoveProducts }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;