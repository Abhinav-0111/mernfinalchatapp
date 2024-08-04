import react from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ContextState from "./context/ContextState";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Provider store={store}>
            <PersistGate
                loading={null}
                persistor={persistor}
            >
                <ContextState>
                    <App />
                </ContextState>
                <ToastContainer />
            </PersistGate>
        </Provider>
    </>
);
