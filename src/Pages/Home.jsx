import React from "react";
import Scrollbar from "../Components/Essentials/Scrollbar";
import Index from "../Components/PageSpecific/Index";
import Credit from "../Components/Essentials/Credit";

export default function Home() {
    return (
        <>
            <Scrollbar title="UniGUIDE" titlepage="/" comp1="Fields" page1="/Feilds" comp2="Suggestions" page2="/Suggestions" comp3="About" page3="/About" />
            <Index />
            <Credit />
        </>
    );
}