import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
    const { selectedUser, user } = useSelector((state) => state.user);
    const { refresh } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    const fetchMessages = async () => {
        const URL = `${window.location.origin}`;
        try {
            const res = await axios.put(`${URL}/message/${selectedUser?._id}`, {
                id: user?.id,
            });
            dispatch(setMessages(res?.data));
            console.log(res.status);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchMessages();
    }, [selectedUser, refresh]);
};
export default useGetMessages;
