import { X } from "lucide-react";
import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";

const Home = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Low to High");

    const options = ["Low to High", "High to Low"];
    return (
        <div className="bg-[#f8f8f7] h-full lg:flex md:flex lg:flex-row md:flex-col sm:flex-col py-24 px-10 ">

            <div className="lg:sticky  top-24 h-full w-56 p-3 border bg-white border-gray-200 rounded-lg">
                <div>
                    <h1 className="text-lg font-semibold text-green-900">Filter</h1>
                    <p className="text-xs  mb-1">Price Range $0 - $1090</p>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="From"
                            className="text-sm px-2 py-1 border border-gray-200 rounded-md w-24 bg-[#f8f8f7] focus:outline-none focus:ring-2 focus:ring-green-900"
                        />
                        <input
                            type="text"
                            placeholder="To"
                            className="text-sm px-2 py-1 border border-gray-200 rounded-md w-24 bg-[#f8f8f7] focus:outline-none focus:ring-2 focus:ring-green-900"
                        />
                    </div>
                    <p className="text-xs  mb-1">Sort</p>
                    <div className="relative inline-block text-sm">
                        <button
                            onClick={() => setOpen(!open)}
                            className="px-3 py-1 w-48 text-left bg-[#f8f8f7] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
                        >
                            {selected}
                        </button>

                        {open && (
                            <ul className="absolute z-10 mt-1 w-48 bg-[#f8f8f7] border border-gray-200 rounded-md shadow-md">
                                {options.map((option) => (
                                    <li
                                        key={option}
                                        onClick={() => {
                                            setSelected(option);
                                            setOpen(false);
                                        }}
                                        className="px-3 py-1 cursor-pointer hover:bg-green-700/20"
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <button className="bg-green-900 text-white text-xs px-4 py-1 rounded-md hover:bg-green-800">
                            Apply
                        </button>

                        <button
                            className="text-green-900 hover:text-red-600 p-1 "
                            title="Clear"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <h1 className="text-2xl font-semibold text-green-900">Home Decor Collection</h1>
                <h3 className="text-sm ">Showing 8 of 8 products</h3>
                <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> 
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

        </div>
    );
};

export default Home;
