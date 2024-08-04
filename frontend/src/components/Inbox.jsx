import React, { useEffect } from "react";
import InboxHeader from "./InboxHeader";
import InboxFooter from "./InboxFooter";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessage";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage";
import { useNavigate } from "react-router-dom";

const Inbox = () => {
    const { messages } = useSelector((state) => state.message);
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, []);
    useGetMessages();
    useGetRealTimeMessage();

    return (
        <>
            <div className="flex w-full h-screen bg-slate-300 items-center justify-center">
                <div className="flex flex-col w-full md:w-[37%] bg-white h-screen">
                    <InboxHeader />
                    <div className="flex bg-white flex-col w-full h-full overflow-y-auto overflow-x-hidden px-4 pb-2">
                        {messages &&
                            messages?.map((item) => {
                                return (
                                    <>
                                        <Message
                                            key={item._id}
                                            item={item}
                                        />
                                    </>
                                );
                            })}
                    </div>
                    <InboxFooter />
                </div>
            </div>
        </>
    );
};

export default Inbox;
