// CSS import
import './FavouriteWidget.css'

// Icons import
import { IoHeartOutline } from "react-icons/io5";

// FavouriteWidget component
const FavouriteWidget = () => {

    return (
        <ul>
            <li className="IconFavourite">
                <IoHeartOutline size="1.3em"/>
            </li>
        </ul>
    )
}

export default FavouriteWidget