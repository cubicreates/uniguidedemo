import React from "react";
import FieldCard from "../Essentials/FieldCard";
import { faWrench, faClock } from "@fortawesome/free-solid-svg-icons";

export default function EducationFields() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <div className="container mx-auto py-25 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6 sm:mb-8">Educational Fields</h1>
                <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12">Explore different educational domains to find your passion.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl w-full">
                    <FieldCard
                        title="Engineering and Technology"
                        description="Exploring the latest advancements in engineering and tech innovation."
                        icon={faWrench}
                        to = "/Fields/Engineering-and-Technology/Courses"
                    />
                    <FieldCard
                        title="Coming Soon"
                        description="Stay tuned for exciting updates and new content!"
                        icon={faClock}
                        to="#"
                    />
                </div>
            </div>

            <div className="text-center py-20 text-gray-500 text-xl font-semibold">More Fields Coming Soon...</div>
        </div>
    );
}
