/* IMPORTS */

// CSS import
import './ItemListContainer.css';
// Component import
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
// Products import
import { bringSideTables } from '../../mock/SideTables';
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
        bringSideTables
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
                <h3>cargando</h3>
            ) : (
                <>
                    <h1> {greeting} </h1>
                    <ItemList sideTables={sideTables} />
                </>
            )}
        </>
    );
};

export default ItemListContainer;