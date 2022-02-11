/* IMPORTS */

// CSS import
import './SearchWidget.css';
// Icons import
import { IoIosSearch } from "react-icons/io";


/* COMPONENTS */

// SearchWidget component
const SearchWidget = () => {

    return (
        <ul>
            <li className="IconSearch">
                <IoIosSearch size="1.3em"/>
            </li>
        </ul>
    )
};

export default SearchWidget;