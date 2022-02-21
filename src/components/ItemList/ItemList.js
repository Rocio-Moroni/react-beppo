/* IMPORTS */

// CSS import
import './ItemList.css';
// Component import
import Item from '../Item/Item';


/* COMPONENTS */

// ItemList component, método map
const ItemList = ({ products }) => {

    return (
        <div className='ItemList'>
            {products.map(product => (
                <Item {...product} key={product.id}/>
            ))}
        </div>
    )
}
export default ItemList;