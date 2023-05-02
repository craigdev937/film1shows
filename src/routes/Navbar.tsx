import React from "react";
import "./Navbar.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { toggleDarkMode } from "../global/DarkSlice";

export const Navbar = () => {
    const dispatch = useAppDispatch();
    const darkmode = useAppSelector((state) => state.darkmode.darkmode);

    return (
        <React.Fragment>
            <header className="header">
                <section className="header__logo">
                    <Link to="/">Films and Shows</Link>
                </section>
                <button
                    className="header__button"
                    onClick={() => dispatch(toggleDarkMode())}
                    >{darkmode ? <BsFillSunFill /> : 
                        <BsFillMoonFill />}
                </button>
                <section className="search__bar">
                    
                </section>
            </header>
            <Outlet />
        </React.Fragment>
    );
};



