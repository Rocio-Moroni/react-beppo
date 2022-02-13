/* IMPORTS */

// CSS import
import './Item.css'


/* COMPONENTS */

// Item component
const Item = ({itemName, stock, price, height, diameter, size, img}) => {

    // Stock function


    return (
        <div className='Item'>
            <h4>{itemName}</h4>
            <img className='ItemImg' src={img}/>
            <p>AR${price}</p>
            <p>Dimensions: Height: {height}, Diameter: {diameter}, Size: {size}</p>
        </div>
    )
};
export default Item;