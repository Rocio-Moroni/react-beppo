/* IMPORTS */

// CSS import
import './CrossWidget.css';
// Icons import
import { IoClose } from "react-icons/io5";


/* COMPONENTS */

// CrossWidget component
const CrossWidget = () => {

    return (
        <ul>
            <li className="IconCross">
                <IoClose size="1.5em"/>
            </li>
        </ul>
    )
};

export default CrossWidget;
