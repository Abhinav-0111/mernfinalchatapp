import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { authenticationLogin } from "../services/Api";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/userSlice";

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [toggleeye, settoggleeye] = useState(false);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const loginUser = async () => {
        if (!username || !password) {
            toast.error("All fields are required");
        }
        const response = await authenticationLogin({
            username,
            password,
        });
        if (response.status === 200) {
            setpassword("");
            setusername("");
            navigate("/");
            toast.success(response?.data?.message);
            dispatch(getUser(response?.data?.user));
        }
        if (response.status === 401) {
            toast.error(response.data);
        }
    };
    return (
        <div className="flex items-center justify-center w-screen md:w-full bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="flex flex-col bg-white h-[450px] md:h-[550px] w-[350px] md:w-[380px] rounded-md py-5 px-14">
                <div className="flex items-center justify-center w-full font-sans text-[30px] font-bold mt-3">
                    LogIn
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex w-full border-b-2 p-2 mt-10">
                        <input
                            type="text"
                            placeholder="Username"
                            onChange={(e) => {
                                setusername(e.target.value);
                            }}
                            value={username}
                            className="w-full border-none outline-none"
                        />
                    </div>
                    <div className="flex w-full border-b-2 p-2">
                        <input
                            type={toggleeye ? "type" : "password"}
                            placeholder="Password"
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                            value={password}
                            className="w-[90%] border-none outline-none"
                        />
                        {toggleeye ? (
                            <div
                                onClick={() => {
                                    settoggleeye(!toggleeye);
                                }}
                                className="flex overflow-hidden h-9 w-9 rounded-full hover:bg-gray-200 cursor-pointer items-center justify-center"
                            >
                                <FaRegEye />
                            </div>
                        ) : (
                            <div
                                onClick={() => {
                                    settoggleeye(!toggleeye);
                                }}
                                className="flex overflow-hidden h-9 w-9 rounded-full hover:bg-gray-200 cursor-pointer items-center justify-center"
                            >
                                <FaRegEyeSlash />
                            </div>
                        )}
                    </div>
                </div>
                <button
                    onClick={loginUser}
                    className="w-full btn btn-ghost bg-gradient-to-r from-purple-500 to-pink-500 mt-14 py-[10px] font-bold text-white rounded-full"
                >
                    LogIn
                </button>
                <div className="flex items-center w-full justify-center mt-1">
                    Don't have a account?&nbsp;
                    <span
                        onClick={() => {
                            navigate("/signup");
                        }}
                        className="cursor-pointer text-blue-600"
                    >
                        SignUp.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
