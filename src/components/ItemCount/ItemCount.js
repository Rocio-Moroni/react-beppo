/* IMPORTS */

// CSS
import './ItemCount.css';
// React
import { useState } from 'react';


/* COMPONENTS */

//ItemCount component
const ItemCount = ({ stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    //Decrement function
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    //Increment function
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className="ItemCount">
            <div className="ItemCountButtons">
                <button className="DecrementButton" onClick={decrement}> - </button>
                <h3 className="ItemCountLabel"> {quantity} </h3>
                <button className="IncrementButton" onClick={increment}> + </button>
            </div>
            <button className="ItemCountAddItems" onClick={ () => onAdd(quantity)}> Add to cart </button>
        </div>
    );
};

export default ItemCount;

