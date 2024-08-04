import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const InboxHeader = () => {
    const { selectedUser, onlineUsers } = useSelector((state) => state.user);
    const isOnline = onlineUsers?.includes(selectedUser?._id);
    if (!selectedUser) return;
    return (
        <>
            <div className="flex items-center justify-between w-full px-4 py-2 bg-white">
                <div className="flex items-center">
                    <Link to={"/"}>
                        <div className="flex">
                            <FaArrowLeft
                                size={22}
                                className="cursor-pointer text-[#0F75FF] mr-5"
                            />
                        </div>
                    </Link>
                    <div
                        className={`flex avatar ${
                            isOnline ? "online" : ""
                        } items-center justify-center h-12 w-12 rounded-full`}
                    >
                        <img
                            src={selectedUser?.profilePhoto}
                            alt="profileimg"
                            className="h-full w-full overflow-hidden cursor-pointer"
                        />
                    </div>
                    <span className="ml-4 text-[18px]">
                        {selectedUser?.name}
                    </span>
                </div>
            </div>
        </>
    );
};

export default InboxHeader;
