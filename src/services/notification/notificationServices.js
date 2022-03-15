/* IMPORTS */

// CSS import
import './NotificationServices.css';
// React import
import { useState, createContext, useContext } from 'react';

/* COMPONENTS */

// Notification component.
const Notification = ({ message, severity }) => {
    const notificationStyles = {
        position: 'sticky',
        top: '0.5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        padding: '10px 20px 10px 20px',
        color: 'white',
    }

    const config = true ?
    {
        style: notificationStyles,
        className: severity === 'success' ? 'Success' : 'Error'
    } : {}

    // If this condition is accomplished, never return the message.
    if (message === '') {
        return null
    }

    return (
        <div {...config}>
            {message}
        </div>
    )
}


// Notification context.
const NotificationContext = createContext()

export const NotificationServicesProvider = ({children}) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    // Function that uses both: severity and message.
    const setNotification = (severity, message) => {
        setMessage(message);
        setSeverity(severity);
        setTimeout(() => {
            setMessage('')
        }, 5000);
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationServices = () => {
    return useContext(NotificationContext)
}