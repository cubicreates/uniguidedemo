import React from 'react';
import Navbar from '../../../Components/Essentials/Navbar';
import Credit from '../../../Components/Essentials/Credit';
import Study from '../../../Components/PageSpecific/Study';

export default function AllContent() {
    return (
        <>
            <Navbar title="UniGUIDE" titlepage="/uniguidedemo/" comp1="Home" page1="/uniguidedemo/" comp2="Fields" page2="/uniguidedemo/Fields" comp3="Suggestions" page3="/uniguidedemo/Suggestions" comp4="About" page4="/uniguidedemo/About" />
            <Study />
            <Credit />
        </>
    );
}