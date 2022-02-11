/* IMPORTS */

// CSS import
import './ItemListContainer.css';
// Component import
import ItemCount from '../ItemCount/ItemCount';


/* COMPONENTS */

// ItemListContainer component
const ItemListContainer = ({greeting}) => {

    // OnAdd function
    const onAdd = (count) => {
        if (count > 1) {
        console.log(`Se agregaron ${count} artículos a tu carrito de compra`);
        } else {
            console.log(`Se agregó ${count} artículo a tu carrito de compra`);
        }
    };

    return (
        <>
        <h1> {greeting} </h1>
        <ItemCount stock={15} initial={1} onAdd={onAdd} />
        </>
    )
};

export default ItemListContainer;