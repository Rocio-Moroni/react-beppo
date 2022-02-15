/* IMPORTS */

// CSS import
import './ItemList.css';
// Component import
import Item from '../Item/Item';


/* COMPONENTS */

// ItemList component
const ItemList = ({sideTables}) => {

    return (
        <div className='ItemList'>
            {sideTables.map((product) => (
                <Item {...product} key={product.id} />
            ))}
        </div>
    )
}
export default ItemList;