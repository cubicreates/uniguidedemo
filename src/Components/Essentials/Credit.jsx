import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Credit() {
    return (
        <footer className="bg-[#1E3A4C] text-white py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                <div>
                    <h2 className="text-lg font-bold text-blue-400">UniGUIDE</h2>
                    <p className="text-sm text-gray-300">Your path to academic success</p>
                    <div className="flex justify-center md:justify-start gap-4 mt-3">
                        <FontAwesomeIcon icon={faFacebook} className="text-xl cursor-pointer hover:text-blue-400" />
                        <FontAwesomeIcon icon={faTwitter} className="text-xl cursor-pointer hover:text-blue-400" />
                        <FontAwesomeIcon icon={faLinkedin} className="text-xl cursor-pointer hover:text-blue-400" />
                        <FontAwesomeIcon icon={faInstagram} className="text-xl cursor-pointer hover:text-blue-400" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-bold text-blue-400">Quick Links</h2>
                    <ul className="text-sm space-y-2 mt-2">
                        <li className="hover:text-blue-400 cursor-pointer">
                            <Link to="/uniguidedemo/" className="hover:text-blue-400">
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                            <Link to="/uniguidedemo/Fields" className="hover:text-blue-400">
                                Fields
                            </Link>
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                            <Link to="/uniguidedemo/Suggestions" className="hover:text-blue-400">
                                Suggestions
                            </Link>    
                            </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                            <Link to="/uniguidedemo/About" className="hover:text-blue-400">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-bold text-blue-400">Contact Us</h2>
                    <p className="text-sm mt-2 flex items-center justify-center md:justify-start gap-2">
                        <FontAwesomeIcon icon={faEnvelope} /> uni.guide.in@gmail.com
                    </p>
                    {/* <p className="text-sm mt-1 flex items-center justify-center md:justify-start gap-2">
                        <FontAwesomeIcon icon={faPhone} /> +91 0008500000
                    </p> */}
                </div>

            </div>

            <div className="border-t border-gray-600 mt-6 pt-4 text-center text-gray-400 text-sm">
                © 2025 UniGUIDE. All rights reserved.
            </div>
        </footer>
    );
}
