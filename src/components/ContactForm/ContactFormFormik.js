/* IMPORTS */

// CSS import
import './ContactForm.css';
// Component import
import CartContext from '../../context/CartContext';
import { useNotificationServices } from '../../services/notification/NotificationServices';
// React import
import React, {useState, useContext} from 'react';
// Firebase import
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore';
// Formik import
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { firestoreDb } from '../../services/firebase/Firebase';


/* COMPONENTS */

// CrontactForm component
const ContactFormFormik = () => {

    // Creation of a state for obtaining the amount of products we've got in our cart.
    const [productsLength, setProductsLength] = useState(0);
    // We bring from CartContext the products from the shopping cart.
    const { cartItems, DeleteItemFromCart } = useContext(CartContext);

    const [sentForm, setSentForm] = useState(false);
    const setNotification = useNotificationServices();


    // Calculation of the total price.
    const total = cartItems.reduce(
        (previous, current) => previous + current.quantity * current.price, 0
    );

    // Confirmation of order (payment).
    const confirmOrder = ({initialValues}) => {
        const objOrder = {
            buyer: {
                name: initialValues.lastName,
                phone: initialValues.phone,
                email: initialValues.email,
                country: initialValues.country,
                city: initialValues.city,
                address: initialValues.address,
                areaCode: initialValues.areaCode,
                comments: initialValues.comments,
                payForm: initialValues.payForm
            },
            items: cartItems,
            total: total,
            date: Timestamp.fromDate(new Date())
        };

        const batch = writeBatch(firestoreDb);
        const outOfStock = [];

        objOrder.items.forEach(prod => {
            getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {
                if (response.data().stock >= prod.quantity) {
                    batch.update(doc(firestoreDb, 'products', response.id), {
                        stock: response.data().stock - prod.quantity
                    });
                } else {
                    outOfStock.push({ id: response.id, ...response.data})
                }
            })
        })

            if (outOfStock.length === 0) {
                addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                    batch.commit().then(() => {
                        setNotification('success', `Great News! Your order was successfully delivered! Order N#${id}`)
                    })
                }).catch(error => {
                    setNotification('error', error)
                })
            } else {
                outOfStock.forEach(prod => {
                    setNotification('error', `We are sorry! The product ${prod.itemName} is out of stock`);
                    DeleteItemFromCart(prod.itemName);
                });
            };

    };


    return (
        <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                phone:'',
                email:'',
                country:'',
                city:'',
                address:'',
                areaCode:'',
                comments:'',
                payForm:'',
                credit:'',
                cardName:'',
                cardNumber:'',
                cardExpirationMonth:'',
                cardExpirationYear:'',
                cardCvv:'',
            }}
            
            validate={(info) => {
                let errors = {};

                //First Name validation.^[a-zA-Z\u00C0-\u017F\s]+$
                if(!info.firstName) {
                    errors.firstName = 'Please write your first name'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(info.firstName)) {
                    errors.firstName = 'This field can only contain letters and spaces'
                };

                //Last Name validation.
                if(!info.lastName) {
                    errors.lastName = 'Please write your last name'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(info.lastName)) {
                    errors.lastName = 'This field can only contain letters and spaces'
                };

                //Phone validation.([0-9]+){9}$
                if(!info.phone) {
                    errors.phone = 'Please check your phone number'
                } else if (!/^\d{3,10}$/.test(info.phone)) {
                    errors.phone = 'This field can only contain numbers'
                };

                //email validation.
                if(!info.email) {
                    errors.email = 'Please write your email address'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(info.email)) {
                    errors.email = 'This field can only contain letters, numbers, periods, hyphens and underscores'
                };

                //Country validation.
                if(!info.country) {
                    errors.country = 'Please write your country name'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(info.country)) {
                    errors.country = 'This field can only contain letters and spaces'
                };

                //City validation.
                if(!info.city) {
                    errors.city = 'Please write your city name'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(info.city)) {
                    errors.city = 'This field can only contain letters and spaces'
                };

                //Address validation./^[A-Za-z0-9\s]+$/g
                if(!info.address) {
                    errors.address = 'Please write your address'
                } else if (!/^[A-Za-z0-9\s]+$/g.test(info.address)) {
                    errors.address = 'This field can only contain letters, spaces and numbers'
                };

                //Area Code validation.
                if(!info.areaCode) {
                    errors.areaCode = 'Please write your code area'
                } else if (!/^\d{1,10}$/.test(info.areaCode)) {
                    errors.areaCode = 'This field can only contain numbers'
                };

                //Comments validation.
                if(!info.comments) {
                    errors.comments = 'Please write additional details and preferences for us'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{0,50}$/.test(info.comments)) {
                    errors.comments = 'This field can only a maximum of 50 characters'
                };

                //Card Name validation.
                if(!info.cardName) {
                    errors.cardName = 'Please write your card name'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(info.cardName)) {
                    errors.cardName = 'This field can only contain letters and spaces'
                };

                //Card Number validation.
                if(!info.cardNumber) {
                    errors.cardNumber = 'Please write your card number'
                } else if (!/^\d{1,20}$/.test(info.cardNumber)) {
                    errors.cardNumber = 'This field can only contain numbers'
                };

                //Card Expiration Month validation.
                if(!info.cardExpirationMonth) {
                    errors.cardExpiration = 'Please write your card expiration date'
                } else if (!/^\d{2,4}$/.test(info.cardExpirationMonth)) {
                    errors.cardExpiration = 'This field can only contain numbers'
                };
                //Card Expiration Year validation.
                if(!info.cardExpirationYear) {
                    errors.cardExpiration = 'Please write your card expiration date'
                } else if (!/^\d{2,4}$/.test(info.cardExpirationYear)) {
                    errors.cardExpiration = 'This field can only contain numbers'
                };

                //Card CVV validation.
                if(!info.cardCvv) {
                    errors.cardCvv = 'Please write your card CVV'
                } else if (!/^\d{3}$/.test(info.cardCvv)) {
                    errors.cardCvv = 'This field can only contain numbers'
                };

                return errors;
            }}
            onSubmit={(info, {resetForm}) => {
                resetForm();
                // confirmOrder(); QUIERO AGREGAR ACA ESTA FUNCION PERO DA ERROR.
                setNotification('success', `este mensaje funciona pero no es el de ConfirmOrder, por lo tanto no se esta generando la orden en Firebase`);
                setSentForm(true);
                setTimeout(() =>
                    setSentForm(false)
                , 5000);
            }}
        >
            {( {errors} )=> (
                <Form className='ContactForm'>
                    <div className='ContactInformation'>
                        <h4 className='ContactInformationTitle'> Contact Information </h4>

                        <div className='FormRow'>
                            <div className='Col'>
                                <label htmlFor='firstName' className='FormLabel'> First Name </label>
                                <Field
                                    type='text'
                                    id='firstName'
                                    name='firstName'
                                    className='TextArea'
                                />
                                <ErrorMessage name='firstName' component={() => (<div className="error">{errors.firstName}</div>)} />
                            </div>
                            <div className='Col'>
                                <label htmlFor='lastName' className='FormLabel Space'> Last Name </label>
                                <Field
                                    type='text'
                                    id='lastName'
                                    name='lastName'
                                    className='Space TextArea'
                                />
                                <ErrorMessage name='lastName' component={() => (<div className="error">{errors.lastName}</div>)} />
                            </div>
                        </div>

                        <div className='FormRow'>
                            <div className='Col'>
                                <label htmlFor='phone' className='FormLabel'> Phone </label>
                                <Field
                                    type='text'
                                    id='phone'
                                    name='phone'
                                    className='TextArea'
                                />
                                <ErrorMessage name='phone' component={() => (<div className="error">{errors.phone}</div>)} />
                            </div>
                            <div className='Col'>
                                <label htmlFor='email' className='FormLabel Space'> Email </label>
                                <Field
                                    type='text'
                                    id='email'
                                    name='email'
                                    className='Space TextArea'
                                />
                                <ErrorMessage name='email' component={() => (<div className="error">{errors.email}</div>)} />
                            </div>
                        </div>

                        <div className='FormRow'>
                            <div className='Col'>
                                <label htmlFor='country' className='FormLabel'> Country </label>
                                <Field
                                    type='text'
                                    id='country'
                                    name='country'
                                    className='TextArea'
                                />
                                <ErrorMessage name='country' component={() => (<div className="error">{errors.country}</div>)} />
                            </div>
                            <div className='Col'>
                                <label htmlFor='city' className='FormLabel Space'> City </label>
                                <Field
                                    type='text'
                                    id='city'
                                    name='city'
                                    className='Space TextArea'
                                />
                                <ErrorMessage name='city' component={() => (<div className="error">{errors.city}</div>)} />
                            </div>
                        </div>

                        <div className='FormRow'>
                            <div className='Col'>
                                <label htmlFor='address' className='FormLabel'> Address </label>
                                <Field
                                    type='text'
                                    id='address'
                                    name='address'
                                    className='TextArea'
                                />
                                <ErrorMessage name='address' component={() => (<div className="error">{errors.address}</div>)} />
                            </div>
                            <div className='Col'>
                                <label htmlFor='areaCode' className='FormLabel Space'> Area Code </label>
                                <Field
                                    type='text'
                                    id='areaCode'
                                    name='areaCode'
                                    className='Space TextArea'
                                />
                                <ErrorMessage name='areaCode' component={() => (<div className="error">{errors.areaCode}</div>)} />
                            </div>
                        </div>

                        <div className='FormRow'>
                            <div className='Col'>
                                <label htmlFor='comments' className='FormLabel'> Additional details and preferences </label>
                                <Field
                                    type='text'
                                    id='comments'
                                    name='comments'
                                    className='TextArea Comments'
                                />
                                <ErrorMessage name='comments' component={() => (<div className="error">{errors.comments}</div>)} />
                            </div>
                        </div>

                    </div>


                    <div className='PaymentInformation'>
                        <h4 className='ContactInformationTitle'> Payment Information </h4>

                        <div className='FormRow PayForm'>
                            <div>
                                <label className='SwitcherColor'>
                                    <Field type="radio" name='payForm' value='credit' className='Switch'/> Credit Card
                                </label>
                            </div>
                            <div className='Col2'>
                                <label className='SwitcherColor'>
                                    <Field type="radio" name='payForm' value='wire' className='Switch'/> Wire Transfer
                                </label>
                            </div>
                        </div>

                        <div>
                            <div className='Payments'>
                                <div className=''>
                                    <Field type='radio' value='3payments' name='payment'/> 3 Payments
                                </div>
                                <div className=''>
                                    <Field type='radio' value='6payments' name='payment'/> 6 Payments
                                </div>
                                <div className=''>
                                    <Field type='radio' value='12payments' name='payment'/> 12 Payments
                                </div>
                            </div>

                            <div className='FormRow'>
                                <div className='Up'>
                                    <label htmlFor='cardName' className='FormLabel CardName'> Card Name </label>
                                    <Field
                                        type='text'
                                        id='cardName'
                                        name='cardName'
                                        className='Width TextArea'
                                    />
                                    <ErrorMessage name='cardName' component={() => (<div className="error">{errors.cardName}</div>)} />
                                </div>
                            </div>

                            <div className='FormRow'>
                                <div className='Col'>
                                    <label htmlFor='cardNumber' className='FormLabel CardNumber'> Card Number </label>
                                    <Field
                                        type='text'
                                        id='cardNumber'
                                        name='cardNumber'
                                        className='Width TextArea'
                                    />
                                    <ErrorMessage name='cardNumber' component={() => (<div className="error">{errors.cardNumber}</div>)} />
                                </div>
                            </div>

                            <div className='FormRow'>
                                <div className='Col'>
                                    <label htmlFor='cardExpiration' className='FormLabel CardExpirationDate'> Expiration Date </label>
                                    <div className='Pay'>
                                        <Field
                                            type='number'
                                            id='cardExpirationMonth'
                                            name='cardExpirationMonth'
                                            placeholder='MM'
                                            className='Width Date'
                                        />
                                        <Field
                                            type='number'
                                            id='cardExpirationYear'
                                            name='cardExpirationYear'
                                            placeholder='YY'
                                            className='Width Date'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='FormRow'>
                                <div className='Col'>
                                    <label htmlFor='cardCvv' className='FormLabel CardCvv'> Card CVV </label>
                                    <Field
                                        type='text'
                                        id='cardCvv'
                                        name='cardCvv'
                                        className='Width TextArea'
                                    />
                                    <ErrorMessage name='cardCvv' component={() => (<div className="error">{errors.cardCvv}</div>)} />
                                </div>
                            </div>
                        </div>

                        <div className='FormButtonsPosition'>
                            <button className='FormButtons' type='reset'> RESET </button>
                            <button className='FormButtons' type='submit' > CONFIRM PAYMENT </button>
                        </div>

                    </div>
                </Form>

            )}
        </Formik>
    );
}

export default ContactFormFormik;