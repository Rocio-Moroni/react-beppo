/* IMPORTS */

// CSS import
import './Footer.css';
// Icons import
import { IoMailOutline } from 'react-icons/io5';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { VscCode } from 'react-icons/vsc';
// React import
import { Link } from 'react-router-dom';


/* COMPONENTS */

// CartWidget component
const Footer = () => {

    return (
        <footer>
            <div className='TopFooter'>

                <div className='LogoFooter'>
                    <h6 className='FooterTitle'> beppo </h6>
                </div>

                <div className='InfoFooter'>
                    <p> <span className='Mail'><IoMailOutline size='1.2em' /></span> beppohome@gmail.com </p>
                    <p> <span className='Location'><HiOutlineLocationMarker size='1.2em' /></span> Av. Malvinas Argentinas km 6.5, Córdoba, Argentina. </p>
                    <p> <span className='Code'><VscCode size='1.2em'/></span> Web Developer: Rocío Moroni. </p>
                    <p> &copy; beppohome 2022 - All registered </p>
                </div>

                <div className='NavBarFooter'>
                    <Link to={`/category/cuttingBoards`}> Cutting Boards </Link>
                    <Link to={`/category/homeDeco`}> Home Deco </Link>
                    <Link to={`/category/leather`}> Leather </Link>
                    <Link to={`/category/sideTables`}> Side Tables </Link>
                </div>

            </div>
        </footer>
    )
};

export default Footer;