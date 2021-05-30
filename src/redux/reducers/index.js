//when we have multiple reducer we use to combine all reducers at one place, that's exactly what we are doing here
//combining reducers


//we need one methos to cobine which we get from 'redux' package

import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from '../reducers/productReducer';

const reducers = combineReducers( {
    allProducts: productReducer,
    product: selectedProductReducer,
});

export default reducers;