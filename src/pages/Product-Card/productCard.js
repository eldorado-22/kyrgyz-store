import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {AiFillHeart} from "react-icons/ai";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const [favorite, setFavorite] = useState(false)
    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: product})
    }
    const addToFavorites = () => {
        dispatch({type: "ADD_TO_FAVORITES", payload: product})
    }

    return (

        <div className="max-w-sm bg-white w-[26%] my-5 mx-7 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={product.image}  alt="img"/>
            </a>
            <div className="p-5 text-center">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <p className="mb-3 font-normal text-[18px] text-gray-700 dark:text-gray-400">{product.description}</p>
                <p className="mb-3 font-normal text-[20px] text-gray-700 dark:text-gray-400">{product.price} $</p>
               <div>
                   <button
                       onClick={() => addToBasket(product)}
                           className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                       Добавить в корзину
                   </button>
                   <button onClick={() => setFavorite(!favorite)} style={{
                       color: favorite ? "red" : '#fff'
                   }}>
                       <AiFillHeart onClick={() => addToFavorites(product)}/>
                   </button>
               </div>
            </div>
        </div>

    );
};

export default ProductCard;