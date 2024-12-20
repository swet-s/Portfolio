import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { handlePdf } from "../utils/fetch";

const Header = ({ text }) => {
    const location = useLocation(); // Get the current location
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleNavBar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (
        <header className="header">
            <nav>
                <div className="row-1">
                    <span className="nav-name">{text}</span>
                    <FontAwesomeIcon
                        className="sidebar-button"
                        onClick={() => toggleNavBar()}
                        icon={faNavicon}
                    ></FontAwesomeIcon>
                </div>
                <ul className={`nav-list ${isSidebarOpen ? "active" : ""}`}>
                    <li className="nav-item"></li>
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" ? "selected" : ""}>
                            /home
                        </Link>
                    </li>
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <Link
                            to="/work"
                            className={location.pathname === "/work" ? "selected" : ""}
                        >
                            /work
                        </Link>
                    </li>
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <Link
                            to="/info"
                            className={location.pathname === "/info" ? "selected" : ""}
                        >
                            /info
                        </Link>
                    </li>
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <Link
                            to="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePdf();
                            }}
                            className={location.pathname === "/resume" ? "selected" : ""}
                        >
                            /resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
