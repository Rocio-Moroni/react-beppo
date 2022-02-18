/* IMPORTS */

// CSS import
import './ItemListContainer.css';
// Component import
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
// Products import
import { getSideTables } from '../../mock/SideTables';
// React import
import { useEffect, useState } from 'react';


/* COMPONENTS */

// ItemListContainer component
const ItemListContainer = ({greeting}) => {
    // useState Hook
    const [sideTables, setSideTables] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect Hook
    useEffect(() => {
        getSideTables
            .then((response) => {
                setSideTables(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <>
                <Spinner />
                </>
            ) : (
                <>
                    {/* <h1> {greeting} </h1> */}
                    <ItemList sideTables={sideTables} />
                </>
            )}
        </>
    );
};

export default ItemListContainer;