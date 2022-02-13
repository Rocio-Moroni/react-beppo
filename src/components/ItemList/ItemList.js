/* IMPORTS */

// CSS import
import './ItemList.css';
// Component import
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';


/* COMPONENTS */

// ItemList component
const ItemList = ({sideTables}) => {

        // OnAdd function
        const onAdd = (count) => {
            if (count > 1) {
            console.log(`Se agregaron ${count} artículos a tu carrito de compra`);
            } else {
                console.log(`Se agregó ${count} artículo a tu carrito de compra`);
            }
        };

    return (
        <div className='ItemList'>
            {sideTables.map((product) => (
                <>
                <Item {...product} key={product.id} />
                <ItemCount stock={15} initial={1} onAdd={onAdd} />
                </>
            ))}
        </div>
    )
}
export default ItemList;