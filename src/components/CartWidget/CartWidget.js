/* IMPORTS */

// CSS import
import './CartWidget.css';
// Icons import
import { IoCartOutline } from "react-icons/io5";


/* COMPONENTS */

// CartWidget component
const CartWidget = () => {

    return (
        <ul>
            <li className="IconCart">
                <IoCartOutline size="1.5em"/>
            </li>
        </ul>
    )
};

export default CartWidget;