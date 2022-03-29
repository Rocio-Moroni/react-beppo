/* IMPORTS */

// CSS import
import './Cart.css'
// Component import
import CartContext from '../../context/CartContext';
import { ItemCart } from "../ItemCart/ItemCart";
import SeparationLine from '../SeparationLine/SeparationLine';
import { useNotificationServices } from '../../services/notification/NotificationServices.js';
import NavBar from '../NavBar/NavBar';
import ContactFormFormik from '../ContactForm/ContactFormFormik';
import Footer from '../Footer/Footer';
import Togglable from '../Togglable/Togglable';
// React import
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
// Firebase import
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp, where, documentId, query, getDocs } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/Firebase';


/* COMPONENTS*/

// Cart component
const Cart = () => {
    // We bring from CartContext the products from the shopping cart.
    const { cartItems, ClearProducts, removeProducts } = useContext(CartContext);

    // Creation of a state for obtaining the amount of products we've got in our cart.
    const [productsLength, setProductsLength] = useState(0);

    // Notification component.
    const setNotification = useNotificationServices();

    const [processingOrder, setProcessingOrder] = useState(false);
    const [sentForm, setSentForm] = useState();
    const contactFormRef = useRef();
    const [order, setOrder] = useState();

    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        address: '',
        areaCode: '',
        comments: '',
        payForm: '',
    })

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

    const confirmOrder = () => {
        if(contactInfo.firstName !=='' && contactInfo.lastName !=='' && contactInfo.phone !=='' && contactInfo.email !=='' && contactInfo.country !=='' && contactInfo.city !=='' && contactInfo.address !=='' && contactInfo.areaCode !=='' && contactInfo.payForm)  {

            setProcessingOrder(true)

            const newOrder = {
                buyer: contactInfo,
                items: cartItems,
                total: total,
                date: Timestamp.fromDate(new Date()),
            }

            const batch = writeBatch(firestoreDb)
            const outOfStock = []

            newOrder.items.forEach(prod => {
                getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {
                    if(response.data().stock >= prod.quantity) {
                        batch.update(doc(firestoreDb, 'products', response.id), {
                            stock: response.data().stock - prod.quantity
                        })
                    } else {
                        outOfStock.push({ id: response.id, ...response.data()})
                    }
                })
            })

            if(outOfStock.length === 0) {
                addDoc(collection(firestoreDb, 'orders'), newOrder).then(({id}) => {
                    batch.commit().then(() => {
                        ClearProducts()
                        setNotification('success', `Great News! Your order was successfully generated! Order N# ${id}`)
                    })
                }).catch(error => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })
            } else {
                outOfStock.forEach(prod => {
                    setNotification('error', `We are sorry! The amount of ${prod.itemName} that you added to the shopping cart exceeds its stock: ${prod.stock}`)
                    removeProducts(prod.id)
                })
            }
        } else {
            setNotification('error', 'Please, you must first click Start Buying button to fill in the form with your contact information for initializing your payment')
        }
    }

    if(processingOrder) {
        return <h1>Se esta procesando su orden</h1>
    }


        return (
        <>
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
                        <div className='PaymentMethod'>
                            <ul className='PaymentMethodImages'>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648169146/BEPPO/PAGO/visa_dbdhb1.png' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648169393/BEPPO/PAGO/mastercard_r9wxkp.png' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648169724/BEPPO/PAGO/american-express_pjtbvt.png' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648169858/BEPPO/PAGO/diners-club-international_gnt4qn.png' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648216580/BEPPO/PAGO/209289_ctqc38.svg' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648170163/BEPPO/PAGO/BanelcoCircular_xoeban.png' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648217564/BEPPO/PAGO/Logo_tarjeta_Cabal_iqcoeg.gif' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648217654/BEPPO/PAGO/logo-tarjeta-naranja-115501048913p0sorv6yj_vxzegr.png' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648217417/BEPPO/PAGO/Tarjeta-Shopping-logo_gs98s5.jpg' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648216273/BEPPO/PAGO/logo-mercadopago29_fvizjw.png' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648216330/BEPPO/PAGO/images_iqjnxt.png' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648217350/BEPPO/PAGO/cencosud_zswiav.png' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/c_crop,h_1000/v1648216673/BEPPO/PAGO/Screenshot_20210702-020250_Instagram_tik5pf.jpg' width='30px'></img></li>
                                <li><img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1648217971/BEPPO/PAGO/banktransfer-sp_termri.png' width='30px'></img></li>
                            </ul>
                        </div>
                        <SeparationLine />
                        <button className='BtnDelete' onClick={() => ClearProducts()}> DELETE ORDER </button>

                    </div>
                </div>

                <Togglable buttonLabelShow = {
                    <button className='BtnConfirm'> START BUYING </button>
                }
                ref={contactFormRef}>
                    <div>
                        <h3 className='Title'> ORDER PAYMENT </h3>
                        <ContactFormFormik  className='FormOrder' contactformref={contactFormRef} setContactInfo={setContactInfo} />
                    </div>
                </Togglable>

                <button className='BtnConfirm' onClick={() => confirmOrder()} disabled={!productsLength} > SEND ORDER </button>

                <Footer />
            </section>
        </>
        )
}


export default Cart;