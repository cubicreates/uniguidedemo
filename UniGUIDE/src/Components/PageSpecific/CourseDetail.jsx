import React from "react";
import CourseBanner from "../Essentials/CourseBanner";

const CourseDetail = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">Full Stack Development</h1>
                <CourseBanner name="All Contents" videos={0} exercises={0} notes={0} to={"/Fields/Engineering-and-Technology/Courses/Full-Stack-Development/All-Contents"} />
                <CourseBanner name="Frontend Development" videos={0} exercises={0} notes={0} to={"#"} />
                <CourseBanner name="Backend Development" videos={0} exercises={0} notes={0} to={"#"} />
                <CourseBanner name="Database Management" videos={0} exercises={0} notes={0} to={"#"} />
                <CourseBanner name="Deployment & DevOps" videos={0} exercises={0} notes={0} to={"#"} />
            </div>
        </div>
    );
};

export default CourseDetail;
