import React from "react";
import { Link } from "react-router-dom";
const Banner = ({ name, description, to}) => {
    return (
        <Link to={to} className="w-full">
        <div className="relative flex items-center justify-between w-full p-4 bg-white border-2 border-gray-300 rounded-lg shadow-md">
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
            <div className="text-gray-500">
                <i className="fas fa-arrow-right text-2xl"></i>
            </div>
        </div>
        </Link>
    );
};

export default Banner;
