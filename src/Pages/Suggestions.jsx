import React from "react";
import Navbar from "../Components/Essentials/Navbar";
import Suggestion from "../Components/PageSpecific/Suggestion";
import Credit from "../Components/Essentials/Credit";

export default function Suggestions() {
    return (
        <>
            <Navbar title="UniGUIDE" titlepage="/uniguidedemo/" comp1="Home" page1="/uniguidedemo/" comp2="Fields" page2="/uniguidedemo/Fields" comp3="About" page3="/uniguidedemo/About" />
            <Suggestion />
            <Credit />
        </>
    );
}