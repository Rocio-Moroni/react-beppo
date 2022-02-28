/* IMPORTS */

// CSS import
import './ItemDetail.css'
// Component import
import SeparationLine from '../SeparationLine/SeparationLine';
import ItemCount from '../ItemCount/ItemCount';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';
import { Link } from 'react-router-dom';


/* COMPONENTS */

// Item component
const ItemDetail = ({ product, itemName, stock, price, dimensions, img, img1, img2, img3, info}) => {

    const [count, setCount] = useState(0);

    // OnAdd function
    const onAdd = (count) => {
        if (count > 0) {
            console.log(`Se agregaron ${count} artículos a tu carrito de compra`)
            setCount(count);
        } else {
            console.log(`Se agregó ${count} artículo a tu carrito de compra`);
            setCount(count);
        }
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
                <br/> {info}.
                </p>
                <div className='SeparationLine'>
                    <SeparationLine />
                </div>
                <div>
                    <Dropdown selected={selected} setSelected={setSelected} />
                </div>

                {
                    count ? (
                        <Link to="/cart">
                            <button className='ViewCart'> View Shopping Cart </button>
                        </Link>
                    ):(
                        <ItemCount className='ItemCount' stock={stock} initial={1} onAdd={onAdd} />
                    )
                }
            </section>
        </article>
    )
};
export default ItemDetail;