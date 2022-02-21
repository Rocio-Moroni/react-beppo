/* IMPORTS */

// CSS import
import './ItemDetail.css'
// Component import
import SeparationLine from '../SeparationLine/SeparationLine';
import ItemCount from '../ItemCount/ItemCount';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';



/* COMPONENTS */

// Item component
const ItemDetail = ({ product, itemName, stock, price, dimensions, img, img1, img2, img3, info}) => {

    // OnAdd function
    const onAdd = (count) => {
        if (count > 1) {
        console.log(`Se agregaron ${count} artículos a tu carrito de compra`);
        } else {
            console.log(`Se agregó ${count} artículo a tu carrito de compra`);
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
                <div className='ItemCount'>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                </div>
            </section>
        </article>
    )
};
export default ItemDetail;