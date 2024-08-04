import React, { useContext, useEffect } from "react";
import useGetOtherUsers from "../hooks/useOtherUsers";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Chat from "./Chat";
import Logout from "./Logout";
import ContextApi from "../context/ContextApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { user, otherUsers, searchUser } = useSelector((state) => state.user);
    const { logoutToggle } = useContext(ContextApi);
    const naviagte = useNavigate();
    useEffect(() => {
        if (!user) {
            naviagte("/login");
        }
    }, []);
    useGetOtherUsers(user?.id);
    if (!otherUsers) return;
    return (
        <>
            {logoutToggle ? <Logout /> : ""}
            <div className="flex w-full h-screen bg-slate-300 items-center justify-center">
                <div className="flex flex-col w-full md:w-[37%] bg-white h-screen">
                    <Header />
                    <div className="flex flex-col w-full h-full  overflow-y-auto overflow-x-hidden">
                        {searchUser ? (
                            searchUser?.map((item) => {
                                return (
                                    <>
                                        <Chat
                                            key={item._id}
                                            item={item}
                                        />
                                    </>
                                );
                            })
                        ) : (
                            <>
                                {otherUsers?.map((item) => {
                                    return (
                                        <>
                                            <Chat
                                                key={item._id}
                                                item={item}
                                            />
                                        </>
                                    );
                                })}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
