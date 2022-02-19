/* IMPORTS */

// CSS import
import './Item.css'


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


    return (
        <div className='Item'>
            <div>
                <h6>{itemName}</h6>
                <img className='ItemImg' src={img}/>
                <p className='ItemPrices'>AR${price}</p>
                <p className='ItemDimensions'>Height: {height} - Diameter: {diameter}{side}</p>
                <button className="ItemCountAddItems">See more</button>
            </div>
        </div>
    )
};
export default Item;