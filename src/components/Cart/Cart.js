/* IMPORTS */

// CSS import
import './Cart.css'
// Component import
import CartContext from '../../context/CartContext';
import { ItemCart } from "../ItemCart/ItemCart";
import SeparationLine from '../SeparationLine/SeparationLine';
import { useNotificationServices } from '../../services/notification/NotificationServices.js';
import NavBar from '../NavBar/NavBar';
// React import
import React, { useContext, useState, useEffect } from 'react';
import { IoRemoveOutline } from 'react-icons/io5';
import { products } from '../../mock/Products';
import { useParams } from 'react-router-dom';
// Firebase import
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/Firebase';


/* COMPONENTS*/

// Cart component
const Cart = ({ item }) => {

    // Creation of a state for obtaining the amount of products we've got in our cart.
    const [productsLength, setProductsLength] = useState(0);

    // We bring from CartContext the products from the shopping cart.
    const { cartItems, ClearProducts } = useContext(CartContext);

    // Notification component.
    const setNotification = useNotificationServices();

    const { productId } = useParams()

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


    // Confirmation of order.
    const confirmOrder = () => {
        const objOrder = {
            buyer: {
                name: 'romo',
                phone: '1212',
                address: 'blabla'
            },
            items: cartItems,
            total: total,
            date: new Date()
        }

        const batch = writeBatch(firestoreDb);
        const outOfStock = [];

        // Verification of all the stock products.
        objOrder.items.forEach(prod => {
            getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {
                if (response.data().stock >= prod.quantity) {
                    batch.update(doc(firestoreDb, 'products', response.id), {
                        stock: response.data().stock - prod.quantity
                    });
                } else {
                    outOfStock.push({ id: response.id, ...response.data()})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                batch.commit().then(() => {
                    ClearProducts();
                    setNotification('success', `Your order was successfully generated! Order N# ${id}`)
                })
            }).catch(error => {
                setNotification('error', error)
            })
        } else {
            outOfStock.forEach(prod => {
                setNotification('error', 'You must complete the contact information to generate the order')
            })
        }

    }

    return (
        <section className='NavBar'>
            <NavBar />
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
                <h4 className='PaymentTitle'> PURCHASE SUMMARY </h4>
                <div className='Resume'>
                    <p> {productsLength} PRODUCTS </p>
                    <p> AR${total} </p>
                </div>
                <div className='Resume'>
                    <p> DELIVERY </p>
                    <p> FREE! </p>
                </div>
                <div className='Resume'>
                    <p><strong> TOTAL </strong></p>
                    <p><strong> AR${total} </strong></p>
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
                <button className='BtnDelete custom-btn' onClick={() => ClearProducts()}> DELETE ORDER </button>
                <button className='BtnConfirm custom-btn' onClick={() => confirmOrder()} disabled={!productsLength} > CONFIRM ORDER </button>
            </div>
        </div>
        </section>
    )
}

export default Cart;