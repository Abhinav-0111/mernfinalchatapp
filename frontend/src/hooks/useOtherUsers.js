import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUser } from "../redux/userSlice";
import { toast } from "react-toastify";

const URL = `${window.location.origin}`;

const useGetOtherUsers = (id) => {
    const dispatch = useDispatch();
    const getUser = async () => {
        try {
            // axios.defaults.withCredentials = true;
            const res = await axios.get(`${URL}/otheruser/${id}`);
            dispatch(getOtherUser(res?.data));
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };
    useEffect(() => {
        getUser();
    }, [id]);
};

export default useGetOtherUsers;
