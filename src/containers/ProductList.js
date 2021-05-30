import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProduct } from '../redux/actions/productActions';

import axios from 'axios';

function ProductList() {

    //we are using the useSelector hook given by "react-redux" package
    //useSelector helps us to extract the current state of the redux store

    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Error", err);
        });
        // console.log(response.data);
        dispatch(setProduct(response.data));

    }
    

    //calling fetchProducts function that will return product data from API

    useEffect(() => {
        fetchProducts();
    }, []);
    
    // console.log(products);

    return (
        <div className="ui grid container">
           <ProductComponent />
        </div>
    )
}

export default ProductList
