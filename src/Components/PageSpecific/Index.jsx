import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";
import { faWrench, faClock } from "@fortawesome/free-solid-svg-icons";
import { FaRoad, FaProjectDiagram, FaChartLine, FaUsers, FaArrowRight } from "react-icons/fa";
import FieldCard from "../Essentials/FieldCard";
import Slider from "react-slick";
import "../css/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
    {
        icon: <FaRoad className="text-blue-500 text-4xl" />,
        title: "Clear Roadmap",
        description: "Step-by-step guidance for your educational journey",
    },
    {
        icon: <FaProjectDiagram className="text-blue-500 text-4xl" />,
        title: "Project Ideas",
        description: "Industry-relevant projects for your portfolio",
    },
    {
        icon: <FaChartLine className="text-blue-500 text-4xl" />,
        title: "Progress Tracking",
        description: "Monitor your learning journey",
    },
    {
        icon: <FaUsers className="text-blue-500 text-4xl" />,
        title: "Community Support",
        description: "Learn and grow with peers",
    },
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default function Index() {
    return (
        <>
            <section className="relative flex flex-col justify-center items-center text-center h-[109vh] bg-cover bg-center text-white px-6"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://wallpapercave.com/wp/wp7617814.jpg')", backgroundPosition: "center top" }}>
                <div className="mb-5">
                    <h1 className="text-6xl md:text-7xl font-bold tracking-wide">Welcome to UniGUIDE</h1>
                    <p className="text-2xl md:text-3xl mt-4 max-w-3xl leading-relaxed">Your personalized roadmap to academic success</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    <ScrollLink to="fields" smooth={true} duration={500} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-5 px-12 rounded-lg transition text-2xl shadow-lg cursor-pointer">
                        Explore Fields
                    </ScrollLink>
                    <RouteLink to="/uniguidedemo/Suggestions" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-500 text-white font-semibold py-5 px-12 rounded-lg transition text-2xl shadow-lg">
                        Add Suggestions
                    </RouteLink>
                </div>
            </section>
            <div className="bg-gray-100 py-16 px-6 mt-4 h-[90vh]" id="fields">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">Educational Fields</h1>
                <div className="hidden md:block">
                    <div className="flex justify-center gap-8">
                        <FieldCard
                            title="Engineering and Technology"
                            description="Exploring the latest advancements in engineering and tech innovation."
                            icon={faWrench}
                            to="/uniguidedemo/Fields/Engineering-and-Technology/Courses"
                            className="w-80"
                        />
                        <FieldCard
                            title="Coming Soon"
                            description="Stay tuned for exciting updates and new content!"
                            icon={faClock}
                            to="#"
                            className="w-80"
                        />
                        <FieldCard
                            title="Coming Soon"
                            description="New features and content will be available soon!"
                            icon={faClock}
                            to="#"
                            className="w-80"
                        />
                    </div>
                </div>
                <div className="md:hidden">
                    <Slider {...sliderSettings}>
                        <div>
                            <FieldCard
                                title="Engineering and Technology"
                                description="Exploring the latest advancements in engineering and tech innovation."
                                icon={faWrench}
                                to="/uniguidedemo/Fields/Engineering-and-Technology/Courses"
                            />
                        </div>
                        <div>
                            <FieldCard
                                title="Coming Soon"
                                description="Stay tuned for exciting updates and new content!"
                                icon={faClock}
                                to="#"
                            />
                        </div>
                        <div>
                            <FieldCard
                                title="Coming Soon"
                                description="New features and content will be available soon!"
                                icon={faClock}
                                to="#"
                            />
                        </div>
                    </Slider>
                </div>
                <div className="flex justify-center mt-10">
                    <RouteLink to="/uniguidedemo/Fields" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-14 rounded-lg transition text-xl flex items-center shadow-lg">
                        More Fields <FaArrowRight className="ml-2" />
                    </RouteLink>
                </div>
            </div>
            <div className="p-6">
                <div className="text-center my-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-20">Why Choose UniGUIDE?</h2>
                    <div className="hidden md:block">
                        <div className="flex justify-center gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 w-80">
                                    <div className="flex justify-center items-center h-20 w-20">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-bold text-xl mt-4 text-center">{feature.title}</h3>
                                    <p className="text-gray-600 text-center max-w-xs leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Slider {...sliderSettings}>
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105">
                                    <div className="flex justify-center items-center h-20 w-20 mb-2">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-bold text-xl">{feature.title}</h3>
                                    <p className="text-gray-600 text-center max-w-xs leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>        </>
    );
}
