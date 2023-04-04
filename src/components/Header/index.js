import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9"
                             alt="Flowbite Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kyrgyz Store</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <a href="#"
                           className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                            Log in
                        </a>
                    </div>

                    <div className="hidden justify-between  items-center w-full lg:flex lg:w-auto lg:order-1"
                         id="mobile-menu-2">
                        <div className="flex flex-col  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <Link to="/"
                                  className="block py-2 pr-4 pl-3 text-xl text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                  aria-current="page">Home
                            </Link>
                            <Link to="/favorites"
                                  className="block py-2 pr-4 w-[90%] pl-3 text-xl text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Favorites
                            </Link>
                            <Link to="/basket"
                                  className="block py-2 pr-4 pl-3 text-xl text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                Basket
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;