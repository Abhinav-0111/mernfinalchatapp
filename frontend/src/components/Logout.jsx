import React, { useContext } from "react";
import ContextApi from "../context/ContextApi";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getOtherUser, getUser } from "../redux/userSlice";

const Logout = () => {
    const { setlogoutToggle } = useContext(ContextApi);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutHandle = async () => {
        const URL = `${window.location.origin}`;
        try {
            const res = axios.get(`${URL}/logout`);
            navigate("/login");
            dispatch(getUser(null));
            dispatch(getOtherUser(null));
            setlogoutToggle(false);
            toast.success((await res).data.message);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className="flex w-full h-full bg-transparent absolute items-center justify-center">
                <div className="flex flex-col rounded-md items-center px-5 bg-white w-[700px] h-[180px]">
                    <div className="flex w-full items-center justify-end">
                        <IoMdClose
                            size={30}
                            className="cursor-pointer mt-4"
                            onClick={() => {
                                setlogoutToggle(false);
                            }}
                        />
                    </div>
                    <button
                        onClick={logOutHandle}
                        className="btn btn-neutral w-full text-[18px] mt-11"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Logout;
