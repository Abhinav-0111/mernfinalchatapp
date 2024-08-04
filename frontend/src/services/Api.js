import axios from "axios";

const URL = `${window.location.origin}`;
export const authenticationSignUp = async (file) => {
    try {
        return await axios.post(`${URL}/signUp`, file);
    } catch (error) {
        console.log("Error while calling Signup Api", error);
        return error.response;
    }
};

export const authenticationLogin = async (file) => {
    try {
        return await axios.post(`${URL}/login`, file);
    } catch (error) {
        console.log("Error while calling Login Api", error);
        return error.response;
    }
};
