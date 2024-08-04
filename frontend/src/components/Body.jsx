import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Inbox from "./Inbox";

const Body = () => {
    const appRouter = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/signUp", element: <SignUp /> },
        { path: "/login", element: <LogIn /> },
        { path: "/inbox", element: <Inbox /> },
    ]);
    return (
        <>
            <div className="flex h-screen w-full bg-white">
                <RouterProvider router={appRouter} />
            </div>
        </>
    );
};

export default Body;
