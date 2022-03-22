/* IMPORTS */

// CSS import
import './SocialMediaWidget.css';
// Icons import
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';


/* COMPONENTS */

// SeparationLine component
const SocialMediaWidget = ({ }) => (
    <div className="social-bar">
        <a className="icon icon-facebook" href="https://www.facebook.com/beppohome" target="_blank">
            <FaFacebookF />
        </a>
        <a className="icon icon-instagram" href="https://www.instagram.com/beppohome/" target="_blank">
            <FaInstagram />
        </a>
        <a className="icon icon-pinterest" href="https://ar.pinterest.com/pin-builder/" target="_blank">
            <FaPinterestP />
        </a>
        <a className="icon icon-whatsapp" href="#" target="_blank">
            <FaWhatsapp />
        </a>
    </div>
);

export default SocialMediaWidget;



