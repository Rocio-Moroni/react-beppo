/* IMPORTS */

// CSS import
import './ContactForm.css';
// React import
import { useState } from 'react';


/* COMPONENTS */

// CrontactForm component
const ContactForm = ({ toggleVisibility, setContact }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [comments, setComments] = useState('');

    const handleContactForm = (e) => {
        e.preventDefault();
        toggleVisibility.current.toggleVisibility();

        const objContact = {
            firstName,
            lastName,
            phone,
            email,
            country,
            city,
            address,
            postalCode,
            comments
        }
        setContact(objContact);
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setCountry('');
        setCity('');
        setAddress('');
        setPostalCode('');
        setComments('');
    }

    return (
        <div className='FormContainer'>
            <h2> LET'S BUY IT! </h2>
                <div className='FormLeftContactInfo'>
                    <form>
                        <h4> Contact Information </h4>
                        <div className="Form__row">
                            <div className='Col'>
                                <label className='LabelContact'>
                                    First Name
                                    <input
                                        className='InputContact'
                                        type='text'
                                        value={firstName}
                                        onChange={({ target }) => setFirstName(target.value)}
                                    />
                                </label>
                            </div>
                            <div className='Col'>
                                <label>
                                    Last Name
                                    <input
                                        className='InputContact'
                                        type='text'
                                        value={lastName}
                                        onChange={({ target }) => setLastName(target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="Form__row">
                            <div className='Col'>
                                <label className='LabelContact'>
                                    Phone
                                    <input
                                        className='InputContact'
                                        type='text'
                                        value={phone}
                                        onChange={({ target }) => setPhone(target.value)}
                                    />
                                </label>
                            </div>
                            <div className='Col'>
                                <label>
                                    E-mail
                                    <input
                                        className='InputContact'
                                        type='text'
                                        value={email}
                                        onChange={({ target }) => setEmail(target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="Form__row">
                            <div className='Col'>
                                <label className='LabelContact'>
                                    Country
                                    <input
                                        className='InputContact'
                                        type='text'
                                        value={country}
                                        onChange={({ target }) => setCountry(target.value)}
                                    />
                                </label>
                            </div>
                            <div className='Col'>
                                <label>
                                    City
                                    <input
                                        className='InputContact'
                                        type='text'
                                        value={city}
                                        onChange={({ target }) => setCity(target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="Form__row">
                            <div className='Col'>
                                <label className='LabelContact'>
                                    Address
                                    <input
                                        className='InputContact'
                                        type='text'
                                        value={address}
                                        onChange={({ target }) => setAddress(target.value)}
                                    />
                                </label>
                            </div>
                            <div className='Col'>
                                <label>
                                    Postal Code
                                    <input
                                        className='InputContact'
                                        type='text'
                                        value={postalCode}
                                        onChange={({ target }) => setPostalCode(target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="Form__row">
                            <div className='Col'>
                                <label>
                                    Additional details and preferences
                                    <input
                                        className='InputContact'
                                        type='text'
                                        value={comments}
                                        onChange={({ target }) => setComments(target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='FormButtons'>
                            <button> Delete Data </button>
                            <button type='submit'> Confirm Payment </button>
                        </div>
                    </form>
                </div>
        </div>
    )
};

export default ContactForm;