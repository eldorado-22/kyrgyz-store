import React from 'react';
import {BsTrashFill} from "react-icons/bs";

const FavoritesTable = ({product}) => {
    return (

        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="col"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.title}
            </th>
            <td className="px-6 py-4">
                <img src={product.image} width={50} alt=""/>
            </td>
            <td scope="col" className="px-10 py-4">{product.description}</td>
            <td scope="col" className="px-6 py-4">{product.price}$</td>
            <td scope="col" className="px-6 py-4 pl-[7%] text-rose-500  text-xl  text-right">
                <BsTrashFill/>
            </td>
        </tr>

    );
};

export default FavoritesTable;