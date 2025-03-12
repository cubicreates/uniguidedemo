import React from "react";
import Navbar from "../Components/Essentials/Navbar";
import AboutUs from "../Components/PageSpecific/AboutUs";
import Credit from "../Components/Essentials/Credit";

export default function About() {
    return (
        <>
            <Navbar title="UniGUIDE" titlepage="/" comp1="Home" page1="/" comp2="Fields" page2="/Fields" comp3="Suggestions" page3="/Suggestions" />
            <AboutUs />
            <Credit />
        </>
    );
}