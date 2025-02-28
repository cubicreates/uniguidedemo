import React from "react";
import Navbar from "../Components/Essentials/Navbar";
import AboutUs from "../Components/PageSpecific/AboutUs";
import Credit from "../Components/Essentials/Credit";

export default function About() {
    return (
        <>
            <Navbar title="UniGUIDE" titlepage="/uniguidedemo/" comp1="Home" page1="/uniguidedemo/" comp2="Fields" page2="/uniguidedemo/Fields" comp3="Suggestions" page3="/uniguidedemo/Suggestions" />
            <AboutUs />
            <Credit />
        </>
    );
}