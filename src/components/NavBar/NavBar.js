// CSS import
import './NavBar.css'
import SearchWidget from '../SearchWidget/SearchWidget'
import FavouriteWidget from '../FavouriteWidget/FavouriteWidget'
import CartWidget from '../CartWidget/CartWidget'

// NavBar component
const NavBar = () => {

    return (
        <nav className="NavBar">
            <div className="NavBarContent">
                <div className="NavBarLogo">
                    <h3><a href="#">Beppo</a></h3>
                </div>
                <div>
                    <ul className="NavBarMenu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Side Tables</a></li>
                        <li><a href="#">Leather</a></li>
                        <li><a href="#">Cutting Boards</a></li>
                    </ul>
                </div>
                <div className="NavBarIcons">
                    <SearchWidget />
                    <FavouriteWidget />
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar