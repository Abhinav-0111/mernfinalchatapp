import React, { useState } from "react";
import { FaSmile } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Picker from "@emoji-mart/react";
import axios from "axios";
import { setMessages } from "../redux/messageSlice";
import data from "@emoji-mart/data";

const InboxFooter = () => {
    const [message, setmessage] = useState("");
    const [isPicker, setisPicker] = useState(false);
    const { selectedUser, user } = useSelector((state) => state.user);
    const { messages } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    const onSubmitHandler = async () => {
        const URL = `${window.location.origin}`;
        if (!message) return;
        try {
            const res = await axios.post(`${URL}/send/${selectedUser?._id}`, {
                id: user.id,
                message: message,
            });
            // toast.success("Message Send Successfully");
            dispatch(setMessages([...messages, res?.data?.newMessage]));
            if (res.status === 200) {
                setmessage("");
                setisPicker(false);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="flex items-center justify-start overflow-hidden bg-white py-4 px-6">
                <FaSmile
                    size={30}
                    onClick={() => {
                        setisPicker(!isPicker);
                    }}
                    className="cursor-pointer text-[#0F75FF]"
                />
                <div
                    className={` ${
                        isPicker ? "flex" : "hidden"
                    } absolute bottom-[70px]`}
                >
                    <Picker
                        data={data}
                        onEmojiSelect={(e) => {
                            setmessage(...message, e.native);
                        }}
                    />
                </div>
                <IoMdAdd
                    size={30}
                    className="cursor-pointer ml-4 text-[#0F75FF]"
                />
                <input
                    type="text"
                    placeholder="Type a message"
                    onChange={(e) => setmessage(...message, e.target.value)}
                    value={message}
                    onClick={() => {
                        setisPicker(false);
                    }}
                    autoFocus
                    className="w-full px-4 py-[10px] rounded-full outline-none ml-4 bg-gray-100"
                />
                <IoSend
                    onClick={onSubmitHandler}
                    size={30}
                    className="cursor-pointer text-[#0F75FF] ml-4"
                />
            </div>
        </>
    );
};

export default InboxFooter;
