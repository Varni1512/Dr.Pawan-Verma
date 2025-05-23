import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import React from "react";

const Auth = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const adminEmail = "blogadmin@gmail.com";
        const adminPassword = "admin123";

        if (email === adminEmail && password === adminPassword) {
            localStorage.setItem("admin", "true");
            navigate("/admin-dashboard");
        } else {
            setError("Invalid Credentials");
        }
    };

    return (
        <div className="min-h-screen bg-[#F5EBD3] flex items-center justify-center px-4">
            <form
                onSubmit={handleLogin}
                className="flex flex-col justify-center items-center bg-[#F3B329] p-8 rounded-2xl shadow-gray-600 shadow-xl w-full max-w-md"
            >
                <h2 className="text-[30px] font-extrabold text-center text-black mb-6">
                    Admin  Login
                </h2>

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 px-4 py-2 border bg-[#F5EBD3] rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    required
                />
                <div className="w-full relative mb-4">
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full mb-4 px-4 py-2 border bg-[#F5EBD3] rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                        required
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-5 transform -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <HiEyeOff className="text-gray-600 w-6 h-6" />
                        ) : (
                            <HiEye className="text-gray-600 w-6 h-6" />
                        )}
                    </button>
                </div>
                <button
                    type="submit"
                    className="bg-black text-white py-2 px-8 font-bold rounded-lg hover:scale-110 transition cursor-pointer"
                >
                    Login
                </button>
                {error && (
                    <p className="text-red-600 mt-4 text-center font-medium">{error}</p>
                )}
            </form>
        </div>
    );
};

export default Auth;
