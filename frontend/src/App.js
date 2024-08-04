import react, { useEffect, useState } from "react";
import Body from "./components/Body";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUsers } from "./redux/userSlice";

const App = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { socket } = useSelector((state) => state.socket);

    useEffect(() => {
        if (user) {
            const socketio = io(`${window.location.origin}`, {
                query: {
                    userId: user.id,
                },
            });
            dispatch(setSocket(socketio));
            socketio.on("getOnlineUsers", (onlineUsers) => {
                dispatch(setOnlineUsers(onlineUsers));
            });
            return () => socketio.close();
        } else {
            if (socket) {
                socket.close();
                dispatch(setSocket(null));
            }
        }
    }, [user]);
    return (
        <>
            <Body />
        </>
    );
};

export default App;
