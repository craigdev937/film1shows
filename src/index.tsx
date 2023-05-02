import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Reducer } from "./global/RootReducer";

import(/* webpackChunkName: "app" */ "./app/App")
.then(({ App }) => {
    ReactDOM
    .createRoot(document.getElementById("root")!)
    .render(
        <Provider store={Reducer}>
            <React.Fragment>
                <App />
            </React.Fragment>
        </Provider>
    )
});


