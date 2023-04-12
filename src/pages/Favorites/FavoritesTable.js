import React from 'react';
import {BsTrashFill} from "react-icons/bs";
import {AiOutlineMinus} from "react-icons/ai";
import {GoPlus} from "react-icons/go";
import {useDispatch} from "react-redux";

const FavoritesTable = ({product}) => {

    const dispatch = useDispatch()

    const decreaseQuantity = () => {
        dispatch({type: "ADD_TO_BASKET", payload: product})
    }

    const increaseQuantity = () => {
        dispatch({type: "BASKET_MINUS", payload: product})
    }

    return (

        <div className="flex flex-wrap">
            <tr className="bg-white border-b basis-1/3  dark:bg-gray-900 dark:border-gray-700">
                <th scope="col"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.title}
                </th>
                <td className="px-6 py-4">
                    <img src={product.image} width={50} alt=""/>
                </td>
                <td scope="col" className="flex items-center px-10 py-4">
                    <span onClick={increaseQuantity} className="mx-1 text-xl cursor-pointer"><AiOutlineMinus/></span>
                    <span className="mx-2 text-xl">{product.quantity}</span>
                    <span onClick={decreaseQuantity} className="mx-1 text-lg cursor-pointer"><GoPlus/></span>
                </td>

                <td scope="col" className="px-6 py-4">
                    {product.price * product.quantity}
                    $
                </td>
                <td scope="col" className="px-6 py-4 pl-[7%] text-rose-500  text-xl  text-right">
                    <BsTrashFill/>
                </td>
            </tr>

        </div>
    );
};

export default FavoritesTable;