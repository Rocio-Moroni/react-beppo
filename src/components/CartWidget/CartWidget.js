// CSS import
import './CartWidget.css'

// Icons import
import { IoCartOutline } from "react-icons/io5";

// CartWidget component
const CartWidget = () => {

    return (
        <ul>
            <li className="IconCart">
                <IoCartOutline size="1.3em"/>
                <p>3</p>
            </li>
        </ul>
    )
}

export default CartWidget