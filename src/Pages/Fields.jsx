import React from "react";
import Navbar from "../Components/Essentials/Navbar";
import EducationFields from "../Components/PageSpecific/EducationFields";
import Credit from "../Components/Essentials/Credit";

export default function Fields() {
    return (
        <>
            <Navbar title="UniGUIDE" titlepage="/uniguidedemo/" comp1="Home" page1="/uniguidedemo/" comp2="Suggestions" page2="/uniguidedemo/Suggestions" comp3="About" page3="/uniguidedemo/About" />
            <EducationFields />
            <Credit />

        </>
    );
}