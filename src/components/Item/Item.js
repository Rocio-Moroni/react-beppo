/* IMPORTS */

// CSS import
import './Item.css'
// Component import
import ItemCount from '../ItemCount/ItemCount';


/* COMPONENTS */

// Item component
const Item = ({itemName, stock, price, height, diameter, side, img}) => {

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
        <div className='Item'>
            <div>
                <h4>{itemName}</h4>
                <img className='ItemImg' src={img}/>
                <p className='ItemPrice'>AR${price}</p>
                <p className='ItemDimensions'>Height: {height} - Diameter: {diameter}{side}</p>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
};
export default Item;