/* IMPORTS */

// CSS import
import './ItemDetailContainer.css';
// Component import
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
// React import
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Firebase import
import { getDoc, doc } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/Firebase';


/* COMPONENTS */

// ItemDetailContainer component
const ItemDetailContainer = () => {
    // useState Hook
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams()

    // useEffect Hook
    useEffect(() => {
        setLoading(true);

        const docRef = doc(firestoreDb, 'products', productId);

        getDoc(docRef).then(response => {
            const product = { id: response.id, ...response.data() }
            setProduct(product);
        }).finally(() => {
            setLoading(false);
        })

        return (() => {
            setProduct()
        });
    }, [productId]); // eslint-disable-line

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