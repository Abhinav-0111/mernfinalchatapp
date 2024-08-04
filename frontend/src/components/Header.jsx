import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ContextApi from "../context/ContextApi";
import { useDispatch, useSelector } from "react-redux";
import { getOtherUser, setSearchUser } from "../redux/userSlice";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const { setlogoutToggle } = useContext(ContextApi);
    const [search, setsearch] = useState("");
    const { user, otherUsers } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const searchSubmitHandler = () => {
        const conversationUser = otherUsers?.find((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        if (conversationUser) {
            dispatch(setSearchUser([conversationUser]));
        } else {
            toast.error("User not found");
        }
    };
    return (
        <>
            <div className="flex flex-col w-full px-3 py-3">
                <div className="flex items-center justify-between px-2">
                    <span className="text-[28px] font-bold">Chats</span>
                    <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden">
                        <img
                            src={user?.profilePhoto}
                            alt="profileimg"
                            onClick={() => setlogoutToggle(true)}
                            className="h-full w-full overflow-hidden cursor-pointer"
                        />
                    </div>
                </div>
                <div className="flex items-center w-full">
                    <div className="flex items-center w-full overflow-hidden rounded-full bg-slate-200 mt-4 py-2 px-4">
                        <FaSearch className="text-gray-500" />
                        <input
                            type="type"
                            value={search}
                            onChange={(e) => {
                                setsearch(e.target.value);
                            }}
                            placeholder="Search"
                            className="w-full outline-none bg-transparent ml-4"
                        />
                        {search ? (
                            <IoMdClose
                                onClick={() => {
                                    dispatch(setSearchUser(null));
                                    setsearch("");
                                }}
                                size={22}
                                className="mr-2 text-gray-500 cursor-pointer"
                            />
                        ) : (
                            ""
                        )}
                        <FaSearch
                            onClick={searchSubmitHandler}
                            className="text-gray-500 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
