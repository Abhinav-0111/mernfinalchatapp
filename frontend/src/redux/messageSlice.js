import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: null,
        refresh: false,
    },
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        getRefresh: (state) => {
            state.refresh = !state.refresh;
        },
    },
});
export const { setMessages, getRefresh } = messageSlice.actions;
export default messageSlice.reducer;
