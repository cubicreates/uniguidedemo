import React from "react";
import Navbar from "../Components/Essentials/Navbar";
import EducationFields from "../Components/PageSpecific/EducationFields";
import Credit from "../Components/Essentials/Credit";

export default function Fields() {
    return (
        <>
            <Navbar title="UniGUIDE" titlepage="/" comp1="Home" page1="/" comp2="Suggestions" page2="/Suggestions" comp3="About" page3="/About" />
            <EducationFields />
            <Credit />

        </>
    );
}