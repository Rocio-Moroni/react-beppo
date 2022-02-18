/* IMPORTS */

// CSS import
import './ItemDetail.css'
// Component import
import ItemCount from '../ItemCount/ItemCount';



/* COMPONENTS */

// Item component
const ItemDetail = ({itemName, stock, price, height, woodType, diameter, side, img, img1, img2, img3}) => {

    // OnAdd function
    const onAdd = (count) => {
        if (count > 1) {
        console.log(`Se agregaron ${count} artículos a tu carrito de compra`);
        } else {
            console.log(`Se agregó ${count} artículo a tu carrito de compra`);
        }
    };

    // Stock function
console.log(itemName)


    return (
        <div className='ItemDetail'>
            <div>
                <div className='ItemImages'>
                    <img className='ItemImg' src={img}/>
                    <div className='ItemCaroussel'>
                        <img className='ItemImgCaroussel' src={img1}/>
                        <img className='ItemImgCaroussel' src={img2}/>
                        <img className='ItemImgCaroussel' src={img3}/>
                    </div>
                </div>
                <div className='ItemDetailDescription'>
                    <h4>{itemName}</h4>
                    <p className='ItemPrice'>AR${price}</p>
                    <p className='ItemDescription'> We design and make monopieces of turned wood, each one of them is unique! Our Cork side table has a height of {height} and a diameter of {diameter}{side}.</p>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
};
export default ItemDetail;
