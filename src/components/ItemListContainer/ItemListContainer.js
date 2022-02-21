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


/* COMPONENTS */

// ItemListContainer component
const ItemListContainer = () => {
    // useState Hook
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    // useEffect Hook
    useEffect(() => {
            setLoading(true);
            getAllProducts(categoryId).then((products) => {
                setLoading(false);
                setProducts(products);
            })
        },[categoryId])

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