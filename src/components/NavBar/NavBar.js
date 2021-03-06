/* IMPORTS */

// CSS import
import './NavBar.css';
// Components import
import SearchWidget from '../SearchWidget/SearchWidget';
import FavouriteWidget from '../FavouriteWidget/FavouriteWidget';
import DinamicCart from '../DinamicCart/DinamicCart'
import SeparationLine from '../SeparationLine/SeparationLine';
import { getCategories } from '../../mock/Products';
// React import
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Firebase import
import { getDocs, collection } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/Firebase';


/* COMPONENTS */

// NavBar component
const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(cat => {
                return { id: cat.id, ...cat.data()}
        })
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
                    <DinamicCart />
                </div>

                <Link to={`/`}>
                    <div className="NavBarLogo">
                        <h2>beppo</h2>
                    </div>
                </Link>

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