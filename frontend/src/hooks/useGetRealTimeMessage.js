import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetRealTimeMessage = () => {
    const { socket } = useSelector((state) => state.socket);
    const { messages, refresh } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            dispatch(setMessages([...messages, newMessage]));
        });
    }, [socket, setMessages, messages, refresh]);
};
export default useGetRealTimeMessage;
