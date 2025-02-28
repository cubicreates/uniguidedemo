import React from "react";
import Scrollbar from "../Components/Essentials/Scrollbar";
import Index from "../Components/PageSpecific/Index";
import Credit from "../Components/Essentials/Credit";

export default function Home() {
    return (
        <>
            <Scrollbar title="UniGUIDE" titlepage="/uniguidedemo/" comp1="Fields" page1="/uniguidedemo/Feilds" comp2="Suggestions" page2="/uniguidedemo/Suggestions" comp3="About" page3="/uniguidedemo/About" />
            <Index />
            <Credit />
        </>
    );
}