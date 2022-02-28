/* IMPORTS */

// CSS import
import './NavBar.css';
// Components import
import SearchWidget from '../SearchWidget/SearchWidget';
import FavouriteWidget from '../FavouriteWidget/FavouriteWidget';
import CartWidget from '../CartWidget/CartWidget';
import SeparationLine from '../SeparationLine/SeparationLine';
import { getCategories } from '../../mock/Products';
// React import
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';


/* COMPONENTS */

// NavBar component
const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, []);

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
                    <h2>beppo</h2>
                </div>

                <div className="SeparationLine1">
                    <SeparationLine />
                </div>

                <div className="NavBarMenuContainer">
                    <div className="NavBarMenu">
                        {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
                            isActive ? 'ActiveOption' : 'Option'}> {cat.description} </NavLink>)}
                    </div>
                </div>

                <div className="SeparationLine2">
                    <SeparationLine />
                </div>
            </div>
        </nav>
    )
};

export default NavBar;