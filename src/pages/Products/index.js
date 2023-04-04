import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "../Product-Card/productCard";

const Product = () => {
    const data = [
        {
            id: 1,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
        },
        {
            id: 2,
            title: 'The Select Moscow ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 2300,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg'
        },
        {
            id: 3,
            title: 'A-A Awesome Apparel ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 9000,
            countInStock: 2,
            rating: 5,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg'
        },
        {
            id: 4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 2,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id: 4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 1,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id: 4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        }

    ]

    const {product} = useSelector(s => s)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "GET_PRODUCT", payload: data})
    },[])
    console.log(product)

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