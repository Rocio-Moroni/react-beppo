/* IMPORTS */

// CSS import
import './ItemListContainer.css';
// Component import
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
// Products import
import { getAllProducts } from '../../mock/Products';
// React import
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// Firebase import
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/Firebase';


/* COMPONENTS */

// ItemListContainer component.
const ItemListContainer = () => {
    // useState Hook
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    // useEffect Hook.
    useEffect(() => {
        setLoading(true);

        // Reference to the collection I need to connect my project with (from firebase).
        const productsCollectionRef = collection(firestoreDb, 'products');

        const collectionRef = categoryId ?
        query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) :
        collection(firestoreDb, 'products')

        // Bring all the docs from the collection 'fireStoreDb'.
        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).finally(() => {
            setLoading(false)
        });

        return (() => {
            setProducts()
        })
    },[categoryId]); // eslint-disable-line

    return (
        <>
            {loading ? (
                <>
                    <Spinner />
                </>
            ) : (
                <>
                    <ItemList products={products} />
                </>
            )}
        </>
    );
};

export default ItemListContainer;