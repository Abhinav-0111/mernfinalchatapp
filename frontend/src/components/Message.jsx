import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import extractTime from "../utiles/exactTime";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import { getRefresh } from "../redux/messageSlice";
import { useNavigate } from "react-router-dom";

const Message = ({ item }) => {
    const scroll = useRef();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { selectedUser } = useSelector((state) => state.user);
    const formattedTime = extractTime(item?.createdAt);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [item]);

    const deletePostHandler = async () => {
        const URL = `${window.location.origin}`;
        try {
            const res = await axios.delete(`${URL}/delete/${item?._id}`);
            dispatch(getRefresh());
            toast.success(res.data.Message);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <>
            <div
                ref={scroll}
                className={`chat ${
                    user?.id === item?.senderId ? "chat-end" : "chat-start"
                }`}
            >
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={
                                user?.id === item?.senderId
                                    ? user?.profilePhoto
                                    : selectedUser?.profilePhoto
                            }
                        />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="text-xs text-black opacity-50">
                        {formattedTime}
                    </time>
                </div>
                <div
                    className={`group chat-bubble flex items-center ${
                        user?.id === item?.senderId
                            ? "bg-[#8E15FF]"
                            : "bg-[#F0F0F0] text-black"
                    }`}
                >
                    {user?.id === item?.senderId ? (
                        <MdDelete
                            onClick={() => {
                                deletePostHandler();
                            }}
                            size={18}
                            className="text-gray-100 hidden cursor-pointer mr-2 group-hover:flex"
                        />
                    ) : (
                        ""
                    )}
                    {item?.message}
                </div>
            </div>
        </>
    );
};

export default Message;
