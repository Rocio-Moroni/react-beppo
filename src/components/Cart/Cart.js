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
// React import
import React, { useContext, useState, useEffect } from 'react';
import { IoRemoveOutline } from 'react-icons/io5';
import { products } from '../../mock/Products';
import { useParams } from 'react-router-dom';
// Firebase import
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/Firebase';
import ContactForm from '../ContactForm/ContactForm';


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
                    <button className='BtnConfirm' onClick={() => confirmOrder()} disabled={!productsLength} > CONFIRM ORDER </button>
                </div>

            </div>
            <div className='FormOrder'>
                <h3 className='Title'> ORDER PAYMENT </h3>
                <ContactFormFormik />
            </div>
            <Footer />
        </section>
    )
}

export default Cart;