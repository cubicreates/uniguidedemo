import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBars, FaTimes } from "react-icons/fa";
import Login from "./Login";

const Navbar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    return (
        <>
            <nav className="bg-[#1E3A4C] text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", height: '70px' }}>
                <div className="container mx-auto flex justify-between items-center h-full">

                    <div className="flex items-center gap-2 text-3xl font-bold mx-10">
                        <FaGraduationCap className="text-blue-400" />
                        <span>
                            <Link to={props.titlepage}>{props.title}</Link>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-7 h-full mr-10">
                        <ul className="flex gap-6 text-base items-center h-full">
                            <li className="hover:text-blue-400 cursor-pointer">
                                <Link to={props.page1}>{props.comp1}</Link>
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer">
                                <Link to={props.page2}>{props.comp2}</Link>
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer">
                                <Link to={props.page3}>{props.comp3}</Link>
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer">
                                <Link to={props.page4}>{props.comp4}</Link>
                            </li>
                        </ul>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-1.5 rounded-lg text-base h-full flex items-center ml-5" onClick={() => setLoginOpen(true)}>
                            Login
                        </button>
                    </div>

                    <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {menuOpen && (
                    <ul className="md:hidden mt-3 space-y-3 text-left bg-[#1E3A4C] py-3 px-6 rounded-lg shadow-lg">
                        <li className="hover:text-blue-400 cursor-pointer">
                            <Link to={props.page1}>{props.comp1}</Link>
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                            <Link to={props.page2}>{props.comp2}</Link>
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                            <Link to={props.page3}>{props.comp3}</Link>
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer" onClick={() => setLoginOpen(true)}>Login</li>
                    </ul>
                )}
            </nav>

            {loginOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg relative w-full max-w-md">
                        <Login onClose={() => setLoginOpen(false)} />
                    </div>
                </div>
            )}
        </>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    comp1: PropTypes.string.isRequired,
    comp2: PropTypes.string.isRequired,
    comp3: PropTypes.string.isRequired,
    comp4: PropTypes.string.isRequired,
    titlepage: PropTypes.string,
    page1: PropTypes.string,
    page2: PropTypes.string,
    page3: PropTypes.string,
    page4: PropTypes.string,
};

Navbar.defaultProps = {
    title: '<title>',
    comp1: '<page1 title>',
    comp2: '<page2 title>',
    comp3: '<page3 title>',
    comp4: '<page4 title>',
    titlepage: '/',
    page1: '/',
    page2: '/',
    page3: '/',
    page4: '/',
};

export default Navbar;
