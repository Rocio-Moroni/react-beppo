/* IMPORTS */

// CSS import
import './ItemDetailContainer.css';
// Component import
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
// Products import
import { getSingleProduct } from '../../mock/Products';
// React import
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


/* COMPONENTS */

// ItemDetailContainer component
const ItemDetailContainer = () => {
    // useState Hook
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams()

    // useEffect Hook
    useEffect(() => {
        getSingleProduct (productId)
            .then((response) => {
                setProduct(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [productId]);

    return (
        <>
            {loading ? (
                <>
                <Spinner />
                </>
            ) : (
                <>
                    {/* <h1> {greeting} </h1> */}
                    <ItemDetail {...product} />
                </>
            )}
        </>
    );
};

export default ItemDetailContainer;