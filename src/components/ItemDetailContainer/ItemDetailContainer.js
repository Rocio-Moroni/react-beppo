/* IMPORTS */

// CSS import
import './ItemDetailContainer.css';
// Component import
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
// Products import
import { getSideTable } from '../../mock/SideTables';
// React import
import { useEffect, useState } from 'react';


/* COMPONENTS */

// ItemDetailContainer component
const ItemDetailContainer = ({greeting}) => {
    // useState Hook
    const [sideTables, setSideTables] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect Hook
    useEffect(() => {
        getSideTable
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
                    <ItemDetail {...sideTables} />
                </>
            )}
        </>
    );
};

export default ItemDetailContainer;