/* IMPORTS */

// CSS import
import './Home.css';
// Components import
import NavBarHome from './NavBarHome';
import Footer from '../Footer/Footer';
// React import
import { Link } from 'react-router-dom';


/* COMPONENTS */

// Home component
const Home = () => {

    return (
        <section className='Home scroller'>
            {/* Header Section */}
            <div>
                <NavBarHome />
            </div>

            {/* Categories Section */}
            <section className='Categories'>
                <h2 className='CategoriesTitle'> CATEGORIES </h2>
                <hr className='Line'></hr>
                <div className='CategoriesItems'>
                    <div className='CatCuttingBoards'>
                        <Link to={`/category/cuttingBoards`}><img className='CatImg' src='https://res.cloudinary.com/dfprmjlir/image/upload/v1645423927/BEPPO/img_46401-d0cd095b45e724ae4416051336550064-640-0-2_t0csxs.jpg'></img></Link>
                        <hr className='SmallLine'></hr><br/>
                        <Link to={`/category/cuttingBoards`}> CUTTING BOARDS </Link>
                    </div>
                    <div className='CatHomeDeco'>
                        <Link to={`/category/homeDeco`}><img className='CatImg' src='https://res.cloudinary.com/dfprmjlir/image/upload/c_scale,h_853/v1645420111/BEPPO/candelabros-sphere-11-d694a440d1acb4b51916404565396391-640-0_mixfnx.jpg'></img></Link>
                        <hr className='SmallLine'></hr><br/>
                        <Link to={`/category/homeDeco`}> HOME DECO </Link>
                    </div>
                    <div className='CatLeather'>
                        <Link to={`/category/leather`}><img className='CatImg' src='https://res.cloudinary.com/dfprmjlir/image/upload/c_fill,h_853,w_640/v1645417364/BEPPO/20062019-img_13621-e528b43d536649e4f715623243644242-640-0_jninjv.jpg'></img></Link>
                        <hr className='SmallLine'></hr><br/>
                        <Link to={`/category/leather`}> LEATHER </Link>
                    </div>
                    <div className='CatSideTables'>
                        <Link to={`/category/sideTables`}><img className='CatImg' src='https://res.cloudinary.com/dfprmjlir/image/upload/c_fill,h_853,w_640/v1647642027/BEPPO/11122021-IMG_0339_njprje.jpg'></img></Link>
                        <hr className='SmallLine'></hr><br/>
                        <Link to={`/category/sideTables`}> SIDE TABLES </Link>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className='AboutUs'>
                <div className='LeftAboutUs'>
                    <img className='AboutUsImg' src='https://res.cloudinary.com/dfprmjlir/image/upload/v1647807948/BEPPO/11122021-IMG_0354_tb9igm.jpg'></img>
                </div>
                <div className='RightAboutUs'>
                    <h2 className='AboutUsTitle'> ABOUT US </h2>
                    <hr className='Line2'></hr>
                    <p className='AboutUsText'> We are an Argentinian timber furniture company dedicated to creating products that we love and want to live with. Designed with integrity, simplicity and strength, using sustainably managed timbers. Each piece is custom made at our workshop in Córdoba, Argentina. Each wood-turned side-table has its own unique character with natural edges according to the different wooden stumps that were obtained. Our commitment is to produce lifetime pieces with a negligible footprint. </p>
                </div>
            </section>

            {/* News Section */}
            <section className='News'>
                <h2 className='InstagramTitle'> COMING SOON </h2>
                <hr className='Line2'></hr>
                <div className='NewsImages'>
                    <div className='InstImg'>
                        <img className='CatImg' src='https://res.cloudinary.com/dfprmjlir/image/upload/c_fill,g_xy_center,h_640,w_640,x_0,y_938/v1647882091/BEPPO/WhatsApp_Image_2022-03-21_at_1.55.07_PM_icdodq.jpg'></img>
                    </div>
                    <div className='InstImg'>
                        <img className='CatImg' src='https://res.cloudinary.com/dfprmjlir/image/upload/c_fill,h_640,w_640/v1647882091/BEPPO/WhatsApp_Image_2022-03-21_at_1.48.37_PM_1_pg1fgn.jpg'></img>
                    </div>
                    <div className='InstImg'>
                        <img className='CatImg' src='https://res.cloudinary.com/dfprmjlir/image/upload/c_fill,h_640,w_640/v1647884110/BEPPO/WhatsApp_Image_2022-03-21_at_1.48.37_PM_2_jzw8gj.jpg'></img>
                    </div>
                    <div className='InstImg'>
                        <img className='CatImg' src='https://res.cloudinary.com/dfprmjlir/image/upload/c_fill,g_xy_center,h_640,w_640,y_459/v1647883805/BEPPO/WhatsApp_Image_2022-03-21_at_2.29.45_PM_tkqc3x.jpg'></img>
                    </div>
                </div>
                <div className='FooterHome'>
                    <Footer />
                </div>
            </section>

        </section>
    )
};

export default Home;