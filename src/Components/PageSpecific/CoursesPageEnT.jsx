import React from "react";
import Banner from "../Essentials/Banner";


const CoursesPageEnT = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Courses</h1>
                <Banner
                    name="Full Stack Development"
                    description="Learn front-end and back-end technologies, including React, Node.js, Express, and databases, to build modern web applications."
                    to={"/Fields/Engineering-and-Technology/Courses/Full-Stack-Development"}
                />
                <div className="my-4"></div>
                <Banner
                    name="Coming Soon"
                    description="Stay tuned for more exciting courses coming your way!"
                    to={"#"}
                />
                <p className="text-center text-gray-500 text-lg mt-8">Coming Soon.</p>
            </div>
        </div>
    );
};

export default CoursesPageEnT;
