/* IMPORTS */

// CSS import
import './NavBarHome.css';
// Components import
import FavouriteWidget from '../FavouriteWidget/FavouriteWidget';
import DinamicCart from '../DinamicCart/DinamicCart'
import { getCategories } from '../../mock/Products';
// React import
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Firebase import
import { getDocs, collection } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/Firebase';


/* COMPONENTS */

// NavBarHome component
const NavBarHome = () => {
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
        <nav className="NavBarHome">

                {/* Background image. */}
            <div className="NavBarHomeContent">

                {/* NavBar content */}
                <div className="NavBarHomeIcons">
                    <div className="NavBarHomeMenu">
                        {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
                        isActive ? 'ActiveOption' : 'Option'}> {cat.description} </NavLink>)}
                    </div>
                    <div className='NavBarHomeWidgets'>
                        <FavouriteWidget />
                        <DinamicCart />
                    </div>
                </div>

                {/* Beppo title */}
                <Link to={`/`}>
                    <div className="NavBarH1">
                        <h1> <span className='HomeTitle'> Welcome to </span> <br/> <strong className='Beppo'> beppo </strong> </h1>
                    </div>
                </Link>

            </div>
        </nav>
    )
};

export default NavBarHome;