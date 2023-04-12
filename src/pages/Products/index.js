import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "./productCard";
import {getProduct} from "../../Redux/Reducer";

const Product = () => {
    const {product} = useSelector(state => state.main)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    },[])

    return (
        <div className= "container">
            <div className="flex flex-wrap justify-between py-5 px-3">
                {
                    product.map(el => (
                        <ProductCard product={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;