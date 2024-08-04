import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { authenticationSignUp } from "../services/Api";

const SignUp = () => {
    const navigate = useNavigate();
    const [toggleeye, settoggleeye] = useState(false);
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [gender, setgender] = useState("");

    const signUpUser = async () => {
        if (!name || !password || !username || !gender) {
            toast.error("All field are required");
        }
        const response = await authenticationSignUp({
            name,
            password,
            username,
            gender,
        });
        if (response.status === 200) {
            setname("");
            setgender("Male");
            setpassword("");
            setusername("");
            toast.success("Account create successfully");
            navigate("/login");
        }
        if (response.status === 401) {
            toast.error("Username Already Exist");
        }
        if (response.status === 500) {
            toast.error(response.message);
        }
    };
    const handleCheckbox = (gender) => {
        setgender(gender);
    };
    return (
        <div className="flex overflow-hidden items-center justify-center w-screen md:w-full bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="flex flex-col bg-white  h-[450px] md:h-[550px] w-[350px] md:w-[380px] rounded-md py-5 px-14">
                <div className="flex items-center justify-center w-full font-sans text-[30px] font-bold mt-3">
                    SignUp
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex w-full border-b-2 p-2 mt-10">
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={(e) => {
                                setname(e.target.value);
                            }}
                            value={name}
                            className="w-full border-none outline-none"
                        />
                    </div>
                    <div className="flex w-full border-b-2 p-2">
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
                    <div className="flex w-full border-b-2 p-2 pr-0">
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
                    <div className="flex items-center w-full justify-between">
                        <div className="flex items-center p-2">
                            <span>Male</span>
                            <input
                                type="checkbox"
                                defaultChecked
                                checked={gender === "male"}
                                onChange={() => {
                                    handleCheckbox("male");
                                }}
                                className="checkbox ml-2"
                            />
                        </div>
                        <div className="flex items-center p-2">
                            <span>Female</span>
                            <input
                                type="checkbox"
                                checked={gender === "female"}
                                onChange={() => {
                                    handleCheckbox("female");
                                }}
                                defaultChecked
                                className="checkbox ml-2"
                            />
                        </div>
                    </div>
                </div>
                <button
                    onClick={signUpUser}
                    className="w-full btn btn-ghost bg-gradient-to-r from-purple-500 to-pink-500 mt-2 md:mt-14 py-[10px] font-bold text-white rounded-full"
                >
                    SignUp
                </button>
                <div className="flex  items-center w-full justify-center mt-1">
                    Already have a account?&nbsp;
                    <span
                        onClick={() => {
                            navigate("/login");
                        }}
                        className="cursor-pointer text-blue-600"
                    >
                        Login.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
