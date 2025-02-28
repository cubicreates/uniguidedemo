import React, { useState } from "react";
import { FaGoogle, FaTimes } from "react-icons/fa";

export default function Login({ onClose }) {
    const [isLogin, setIsLogin] = useState(true);
    const [isOtpLogin, setIsOtpLogin] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">
            <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md text-center relative">
                <button className="absolute top-4 right-4 text-gray-700 text-2xl" onClick={onClose}>
                    <FaTimes />
                </button>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">{isLogin ? "Login" : "Register"}</h1>

                <button className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mb-3">
                    <FaGoogle /> Continue with Google
                </button>

                {!isOtpLogin && (
                    <>
                        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" />
                        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-3" disabled={!emailVerified} />
                        {!isLogin && <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded mb-3" disabled={!emailVerified} />}
                    </>
                )}

                {isOtpLogin && (
                    <>
                        <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded mb-3" />
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mb-3">
                            Send OTP
                        </button>
                        <input type="text" placeholder="Enter OTP" className="w-full p-2 border rounded mb-3" />
                        {isLogin && <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mb-3">Verify OTP</button>}
                    </>
                )}

                {isLogin ? (
                    <>
                        <p className="text-blue-500 cursor-pointer mb-3" onClick={() => setIsOtpLogin(!isOtpLogin)}>
                            {isOtpLogin ? "Login with Email/Password" : "Login with OTP"}
                        </p>
                        <p className="text-blue-500 cursor-pointer mb-3">Forgot Password?</p>
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mb-3">Login</button>
                        <p className="text-gray-700">Not a user? <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(false)}>Then Register</span></p>
                    </>
                ) : (
                    <>
                        <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded mb-3" />
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mb-3" onClick={() => setEmailVerified(true)}>
                            Send Verification Email
                        </button>
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mb-3" disabled={!emailVerified}>
                            Register
                        </button>
                        <p className="text-gray-700">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(true)}>Login</span></p>
                    </>
                )}
            </div>
        </div>
    );
}
