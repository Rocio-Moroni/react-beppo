/* IMPORTS */
// CSS import
import ContactForm from './ContactForm.css';
// React import
import React, {useState} from 'react';
// Formik import
import { Formik, Form, Field, ErrorMessage } from 'formik';


/* COMPONENTS */

// CrontactForm component
const ContactFormFormik = () => {
    const [sentForm, setSentForm] = useState(false);
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
                cardExpiration:'',
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
                } else if (!/^\d{10}$/.test(info.phone)) {
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
                } else if (!/^\d{10}$/.test(info.areaCode)) {
                    errors.areaCode = 'This field can only contain numbers'
                };

                //Comments validation.
                if(!info.comments) {
                    errors.comments = 'Please write additional details and preferences for us'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{50}$/.test(info.comments)) {
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
                } else if (!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/.test(info.cardNumber)) {
                    errors.cardNumber = 'This field can only contain numbers'
                };

                //Card Expiration date validation.
                if(!info.cardExpiration) {
                    errors.cardExpiration = 'Please write your card expiration date'
                } else if (!/^\d{4}$/.test(info.cardExpiration)) {
                    errors.cardExpiration = 'This field can only contain numbers'
                };

                //Card CVV validation.
                if(!info.cardCvv) {
                    errors.cardCvv = 'Please write your card CVV'
                } else if (!/^\d{4}$/.test(info.cardCvv)) {
                    errors.cardCvv = 'This field can only contain numbers'
                };

                return errors;
            }}
            onSubmit={(info, {resetForm}) => {
                resetForm();
                setSentForm(true);
                setTimeout(() => {
                    setSentForm(false)
                }, 5000);
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
                                    <Field type='radio' value='payments'/> 3 Payments
                                </div>
                                <div className=''>
                                    <Field type='radio' value='payments'/> 6 Payments
                                </div>
                                <div className=''>
                                    <Field type='radio' value='payments'/> 12 Payments
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
                                            id='cardExpiration'
                                            name='cardExpiration'
                                            placeholder='MM'
                                            className='Width Date'
                                        />
                                        <Field
                                            type='number'
                                            id='cardExpiration'
                                            name='cardExpiration'
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
                            <button className='FormButtons'> Delete Data </button>
                            <button className='FormButtons' type="submit"> Confirm Booking </button>
                            {sentForm && <p className="success"> Formulario enviado con exito! </p>}
                        </div>

                    </div>
                </Form>
            )}

        </Formik>
    )
}

export default ContactFormFormik;
