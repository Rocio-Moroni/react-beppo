/* IMPORTS */

// CSS
import './ItemCount.css';
// React
import { useState } from 'react';


/* COMPONENTS */

//ItemCount component
const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    //Decrement function
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    //Increment function
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div className="ItemCount">
            <div className="ItemCountButtons">
                <button className="DecrementButton" onClick={decrement}> - </button>
                <h3 className="ItemCountLabel"> {count} </h3>
                <button className="IncrementButton" onClick={increment}> + </button>
            </div>
            <button className="ItemCountAddItems" onClick={ () => onAdd(count)}> Add to cart </button>
        </div>
    );
};

export default ItemCount;