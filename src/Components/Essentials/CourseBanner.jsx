import React from "react";
import { FaBook, FaFilePdf, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
const CourseBanner = ({ name, videos, exercises, notes, to }) => {
    return (
        <Link to={to}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-white shadow-md rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center">
                        <span className="mr-2 border-l-4 border-blue-600 pl-2">{name}</span>
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                        <FaVideo className="mr-1 text-red-600" /> {videos} Videos |
                        <FaBook className="mx-1 text-blue-600" /> {exercises} Exercises |
                        <FaFilePdf className="mx-1 text-green-600" /> {notes} Notes
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CourseBanner;
