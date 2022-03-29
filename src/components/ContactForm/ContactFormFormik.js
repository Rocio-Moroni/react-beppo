/* IMPORTS */

// CSS import
import './ContactForm.css';
// Component import
import { useNotificationServices } from '../../services/notification/NotificationServices';
// Formik import
import { Formik, Form, Field } from 'formik';


/* COMPONENTS */

// Inputs validation:
const validateFirstName = value => {
    let error;
    if (!value) {
        error = 'Please write your first name';
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(value)) {
        error = 'This field can only contain letters and spaces';
    }
    return error;
}

const validateLastName = value => {
    let error;
    if (!value) {
        error = 'Please write your last name';
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(value)) {
        error = 'This field can only contain letters and spaces';
    }
    return error;
}

const validatePhone = value => {
    let error;
    if (!value) {
        error = 'Please write your phone number';
    } else if (!/^\d+$/.test(value)) {
        error = 'This field can only contain numbers';
    }
    return error;
}

const validateEmail = value => {
    let error;
    if (!value) {
        error = 'Please write your e-mail address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid e-mail address';
    }
    return error;
}

const validateCountry = value => {
    let error;
    if (!value) {
        error = 'Please write your country name';
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(value)) {
        error = 'This field can only contain letters and spaces';
    }
    return error;
}

const validateCity = value => {
    let error;
    if (!value) {
        error = 'Please write your city name';
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(value)) {
        error = 'This field can only contain letters and spaces';
    }
    return error;
}

const validateAddress = value => {
    let error;
    if (!value) {
        error = 'Please write your address';
    } else if (!/^[A-Za-z0-9\s]+$/g.test(value)) {
        error = 'This field can only contain letters, spaces and numbers';
    }
    return error;
}

const validateAreaCode = value => {
    let error;
    if (!value) {
        error = 'Please write your area code';
    } else if (!/^\d+$/.test(value)) {
        error = 'This field can only contain numbers';
    }
    return error;
}

const validateCardName = value => {
    let error;
    if (!value) {
        error = 'Please write your card name';
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(value)) {
        error = 'This field can only contain letters and spaces';
    }
    return error;
}

const validateCardNumber = value => {
    let error;
    if (!value) {
        error = 'Please write your card number';
    } else if (!/^\d{1,20}$/.test(value)) {
        error = 'This field can only contain numbers, maximum 20 characters';
    }
    return error;
}

const validateCardCvv = value => {
    let error;
    if (!value) {
        error = 'Please write your card CVV';
    } else if (!/^\d{3}$/.test(value)) {
        error = 'This field can only contain numbers, maximum 3 characters';
    }
    return error;
}

// ContactForm component
const ContactFormFormik = ({ contactFormRef, setContactInfo }) => {
    const setNotification = useNotificationServices();

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
                payment:'',
                cardName:'',
                cardNumber:'',
                cardExpirationMonth:'',
                cardExpirationYear:'',
                cardCvv:'',
            }}
            onSubmit={values => {
                setContactInfo(values);
                setNotification('success', `Good Job! Your contact and payment information is okey! Please send your order`);
                // contactFormRef.current.toggleVisibility();
            }}
        >
            {( { errors, touched } )=> (
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
                                    validate= {validateFirstName}
                                    className='TextArea'
                                />
                                {errors.firstName && touched.firstName && <div className='error'>{errors.firstName}</div>}
                            </div>
                            <div className='Col'>
                                <label htmlFor='lastName' className='FormLabel Space'> Last Name </label>
                                <Field
                                    type='text'
                                    id='lastName'
                                    name='lastName'
                                    validate= {validateLastName}
                                    className='Space TextArea'
                                />
                                {errors.lastName && touched.lastName && <div className='error'>{errors.lastName}</div>}
                            </div>
                        </div>

                        <div className='FormRow'>
                            <div className='Col'>
                                <label htmlFor='phone' className='FormLabel'> Phone </label>
                                <Field
                                    type='text'
                                    id='phone'
                                    name='phone'
                                    validate= {validatePhone}
                                    className='TextArea'
                                />
                                {errors.phone && touched.phone && <div className='error'>{errors.phone}</div>}
                            </div>
                            <div className='Col'>
                                <label htmlFor='email' className='FormLabel Space'> Email </label>
                                <Field
                                    type='text'
                                    id='email'
                                    name='email'
                                    validate= {validateEmail}
                                    className='Space TextArea'
                                />
                                {errors.email && touched.email && <div className='error'>{errors.email}</div>}
                            </div>
                        </div>

                        <div className='FormRow'>
                            <div className='Col'>
                                <label htmlFor='country' className='FormLabel'> Country </label>
                                <Field
                                    type='text'
                                    id='country'
                                    name='country'
                                    validate= {validateCountry}
                                    className='TextArea'
                                />
                                {errors.country && touched.country && <div className='error'>{errors.country}</div>}
                            </div>
                            <div className='Col'>
                                <label htmlFor='city' className='FormLabel Space'> City </label>
                                <Field
                                    type='text'
                                    id='city'
                                    name='city'
                                    validate= {validateCity}
                                    className='Space TextArea'
                                />
                                {errors.city && touched.city && <div className='error'>{errors.city}</div>}
                            </div>
                        </div>

                        <div className='FormRow'>
                            <div className='Col'>
                                <label htmlFor='address' className='FormLabel'> Address </label>
                                <Field
                                    type='text'
                                    id='address'
                                    name='address'
                                    validate= {validateAddress}
                                    className='TextArea'
                                />
                                {errors.address && touched.address && <div className='error'>{errors.address}</div>}
                            </div>
                            <div className='Col'>
                                <label htmlFor='areaCode' className='FormLabel Space'> Area Code </label>
                                <Field
                                    type='text'
                                    id='areaCode'
                                    name='areaCode'
                                    validate= {validateAreaCode}
                                    className='Space TextArea'
                                />
                                {errors.areaCode && touched.areaCode && <div className='error'>{errors.areaCode}</div>}
                            </div>
                        </div>

                        <div className='FormRow'>
                            <div className='Col'>
                                <label htmlFor='comments' className='FormLabel'> Additional details and preferences (optional)</label>
                                <Field
                                    type='text'
                                    id='comments'
                                    name='comments'
                                    className='TextArea Comments'
                                />
                            </div>
                        </div>

                    </div>


                    <div className='PaymentInformation'>
                        <h4 className='ContactInformationTitle'> Payment Information </h4>

                        <div className='FormRow PayForm'>
                            <div>
                                <label className='SwitcherColor'>
                                    <Field
                                        type="radio"
                                        name='payForm'
                                        value='credit'
                                        className='Switch'/> Credit Card
                                </label>
                            </div>
                            <div className='Col2'>
                                <label className='SwitcherColor'>
                                    <Field
                                        type="radio"
                                        name='payForm'
                                        value='wire'
                                        className='Switch'/> Wire Transfer
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
                                        validate= {validateCardName}
                                        className='Width TextArea'
                                    />
                                {errors.cardName && touched.cardName && <div className='error'>{errors.cardName}</div>}
                                </div>
                            </div>

                            <div className='FormRow'>
                                <div className='Col'>
                                    <label htmlFor='cardNumber' className='FormLabel CardNumber'> Card Number </label>
                                    <Field
                                        type='text'
                                        id='cardNumber'
                                        name='cardNumber'
                                        validate= {validateCardNumber}
                                        className='Width TextArea'
                                    />
                                {errors.cardNumber && touched.cardNumber && <div className='error'>{errors.cardNumber}</div>}
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
                                        validate= {validateCardCvv}
                                        className='Width TextArea'
                                    />
                                {errors.cardCvv && touched.cardCvv && <div className='error'>{errors.cardCvv}</div>}
                                </div>
                            </div>
                        </div>

                        <div className='FormButtonsPosition'>
                            <button className='FormButtons' type='reset'> RESET FORM </button>
                            <button className='FormButtons' type='submit'> CONFIRM FORM </button>
                        </div>

                    </div>
                </Form>

            )}
        </Formik>
    );
}

export default ContactFormFormik;