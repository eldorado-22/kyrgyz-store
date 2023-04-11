import React from 'react';
import {useSelector} from "react-redux";
import FavoritesTable from "./FavoritesTable";

const Favorites = () => {

    const {favorites} = useSelector(state => state)

    return (
        <div className="container py-10">
            <div className="relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Product name</th>
                        <th scope="col" className="px-6 py-3">Image</th>
                        <th scope="col" className="px-6 py-3">Quantity</th>
                        <th scope="col" className="px-6  py-3">Price</th>
                        <th scope="col" className="pl-16">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{*/}
                    {/*    favorites.map(el => <FavoritesTable product={el}/>)*/}
                    {/*}*/}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Favorites;