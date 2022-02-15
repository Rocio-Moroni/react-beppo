/* IMPORTS */

// CSS import
import './NavBar.css';
// Components import
import SearchWidget from '../SearchWidget/SearchWidget';
import FavouriteWidget from '../FavouriteWidget/FavouriteWidget';
import CartWidget from '../CartWidget/CartWidget';
import SeparationLine from '../SeparationLine/SeparationLine';


/* COMPONENTS */

// NavBar component
const NavBar = () => {

    return (
        <nav className="NavBar">
            <div className="NavBarContent">
                <div className="NavBarSearch">
                    <SearchWidget />
                </div>

                <div className="NavBarIcons">
                    <FavouriteWidget />
                    <CartWidget />
                </div>

                <div className="NavBarLogo">
                    <h2><a href="#">beppo</a></h2>
                </div>

                <div className="SeparationLine1">
                    <SeparationLine />
                </div>

                <div className="NavBarMenuContainer">
                    <ul className="NavBarMenu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Side Tables</a></li>
                        <li><a href="#">Leather</a></li>
                        <li><a href="#">Cutting Boards</a></li>
                    </ul>
                </div>

                <div className="SeparationLine2">
                    <SeparationLine />
                </div>
            </div>
        </nav>
    )
};

export default NavBar;