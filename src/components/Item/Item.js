/* IMPORTS */

// CSS import
import './Item.css';
// React import
import { Link } from 'react-router-dom';


/* COMPONENTS */

// Item component
const Item = ({id, itemName, stock, price, dimensions, img}) => {

    // Stock function
    

    return (
        <div className='Item'>
            <div>
                <h6>{itemName}</h6>
                <img className='ItemImg' src={img}/>
                <p className='ItemPrices'>AR${price}</p>
                <p className='ItemDimensions'>Dimensions: {dimensions}</p> <br/>
                <Link to= {`/item/${id}`} className="ItemSeeMore"> See more </Link>
            </div>
        </div>
    )
};
export default Item;