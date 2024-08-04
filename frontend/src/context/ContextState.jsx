import React, { useState } from "react";
import ContextApi from "./ContextApi";

const ContextState = (props) => {
    const [logoutToggle, setlogoutToggle] = useState(false);
    return (
        <>
            <ContextApi.Provider value={{ logoutToggle, setlogoutToggle }}>
                {props.children}
            </ContextApi.Provider>
        </>
    );
};

export default ContextState;
