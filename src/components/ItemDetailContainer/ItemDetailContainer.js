/* IMPORTS */

// CSS import
import './ItemDetailContainer.css';
// Component import
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
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
        <div className='ItemDetailContainer'>
            <NavBar />
            {loading ? (
                <>
                <Spinner />
                </>
            ) : (
                <>
                    {/* <h1> {greeting} </h1> */}
                    <ItemDetail {...product} />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;