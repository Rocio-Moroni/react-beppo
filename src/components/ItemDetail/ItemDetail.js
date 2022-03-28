/* IMPORTS */

// CSS import
import './ItemDetail.css'
// Component import
import SeparationLine from '../SeparationLine/SeparationLine';
import ItemCount from '../ItemCount/ItemCount';
import Dropdown from '../Dropdown/Dropdown';
import CartContext from '../../context/CartContext';
import { useNotificationServices } from '../../services/notification/NotificationServices';
// React import
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';


/* COMPONENTS */

// Item component
const ItemDetail = ({ product, id, itemName, stock, price, dimensions, img, img1, img2, img3, info}) => {

    const [count, setCount] = useState(0);
    const { AddItemToCart } = useContext(CartContext);
    const setNotification = useNotificationServices();

    // Product to add function
    const productToAdd = {
        id,
        itemName,
        stock,
        price,
        dimensions,
        img,
        img1,
        img2,
        img3,
        info
    };
    // OnAdd function
    const onAdd = (count) => {
        setCount(count);
        AddItemToCart({...productToAdd}, count);
        setNotification('success', `Good News! ${itemName} was successfully added to your Shopping Cart!`);
    };

    // Selected hook
    const [selected, setSelected] = useState("Wood Type");


    return (
        <article className='ItemDetail'>
            <picture className='ItemImages'>
                <img className='ItemImgBig' src={img}/>
                <div className='ItemCaroussel'>
                    <img className='ItemImgCaroussel' src={img1}/>
                    <img className='ItemImgCaroussel' src={img2}/>
                    <img className='ItemImgCaroussel' src={img3}/>
                </div>
            </picture>

            <section className='ItemDetailDescription'>
                <h4>{itemName}</h4>
                <p className='ItemPrice'>AR${price}</p>
                <p className='ItemDescription'> We design and make monopieces of turned wood, each one of them is <strong> Unique! </strong>.<br/>
                <br/> Our "{itemName}" has the following dimensions: {dimensions}.
                <br/><br/> {info}.
                </p>
                <div className='SeparationLine'>
                    <SeparationLine />
                </div>
                <div>
                    <Dropdown selected={selected} setSelected={setSelected} />
                </div>

                {
                    count ? (
                            <div className='multi-button'>
                                <Link to="/"> <button> Continue Shopping </button> </Link>
                                <Link to="/cart"> <button> View Shopping Cart </button> </Link>
                                <Link to="/cart"> <button> Finish Shopping </button> </Link>
                            </div>
                    ):(
                        <ItemCount className='ItemCount' stock={stock} initial={1} onAdd={onAdd} />
                    )
                }
            </section>
        </article>
    )
};
export default ItemDetail;


