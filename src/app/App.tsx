import React from "react";
import "./App.css";
import { Main } from "../routes/Main";
import { useAppSelector } from "../global/Hooks";

export const App = () => {
    const darkmode = useAppSelector((state) => state.darkmode.darkmode);
    return (
        <React.Fragment>
            <aside className={`theme ${darkmode && "darkmode"}`}>
                <Main />
            </aside>
        </React.Fragment>
    );
};


