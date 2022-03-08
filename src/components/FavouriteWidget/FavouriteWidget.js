/* IMPORTS */

// CSS import
import './FavouriteWidget.css';
// Icons import
import { IoHeartOutline } from "react-icons/io5";


/* COMPONENTS */

// FavouriteWidget component
const FavouriteWidget = () => {

    return (
        <ul>
            <li className="IconFavourite">
                <IoHeartOutline size="1.5em"/>
            </li>
        </ul>
    )
};

export default FavouriteWidget;