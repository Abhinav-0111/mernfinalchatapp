import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        otherUsers: null,
        selectedUser: null,
        searchUser: null,
        onlineUsers: null,
    },
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload;
        },
        getOtherUser: (state, action) => {
            state.otherUsers = action.payload;
        },
        getSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        setSearchUser: (state, action) => {
            state.searchUser = action.payload;
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
    },
});

export const {
    getUser,
    getOtherUser,
    getSelectedUser,
    setSearchUser,
    setOnlineUsers,
} = userSlice.actions;
export default userSlice.reducer;
