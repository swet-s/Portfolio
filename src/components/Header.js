import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import myData from "../res/my-data.json";

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
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" ? "selected" : ""}>
                            home/
                        </Link>
                    </li>
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <Link
                            to="/work"
                            className={location.pathname === "/work" ? "selected" : ""}
                        >
                            work/
                        </Link>
                    </li>
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <Link
                            to="/info"
                            className={location.pathname === "/info" ? "selected" : ""}
                        >
                            info/
                        </Link>
                    </li> 
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <a
                            href={myData.resume.pdf}
                            className={location.pathname === "/resume" ? "selected" : ""}
                            target="_blank" // Opens the link in a new tab
                            rel="noopener noreferrer" // For security reasons
                        >
                            resume/
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
