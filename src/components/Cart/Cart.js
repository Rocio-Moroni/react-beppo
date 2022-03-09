/* IMPORTS */

// CSS import
import './Cart.css'
// Component import
import CartContext from '../../context/CartContext';
import { ItemCart } from "../ItemCart/ItemCart";
import SeparationLine from '../SeparationLine/SeparationLine';
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
            <div className='ItemsReview'>
                <div className='Intro'>
                    <h3 className='Title'> REVIEW ORDER </h3>
                    <p> TOTAL ({productsLength} products) <strong>AR${total}</strong></p>
                </div>
                <div>
                    {cartItems.map((item,i) => (
                        <ItemCart key={i} item={item}></ItemCart>
                    ))}
                </div>
            </div>

            <div className='PaymentResume'>
                <h4 className='PaymentTitel'> PURCHASE SUMMARY </h4>
                <div>
                    <p> {productsLength} PRODUCTS </p>
                    <p> AR${total} </p>
                </div>
                <div>
                    <p> DELIVERY </p>
                    <p> FREE! </p>
                </div>
                <div>
                    <p> TOTAL </p>
                    <p> AR${total} </p>
                </div>
                <SeparationLine />
                <p> PAYMENT METHODS </p>
                <div>
                    <ul>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                        <li><img src=''></img></li>
                    </ul>
                </div>
                <SeparationLine />
                <div>
                <ul>
                    <li>
                        <a className="facebook" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a className="twitter" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a className="google" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart;

<ul>
    <li>
        <a class="facebook" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
    </li>
    <li>
        <a class="twitter" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
    </li>
    <li>
        <a class="instagram" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
    </li>
    <li>
        <a class="google" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-google-plus" aria-hidden="true"></i>
        </a>
    </li>
</ul>