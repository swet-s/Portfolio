import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ text }) => {
    const location = useLocation(); // Get the current location
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleNavBar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (
        <header className="header">
            <nav>
                <div className="row-1">
                    <span className="nav-name">{text}</span>
                    <button className="sidebar-button" onClick={() => toggleNavBar()}>
                        ☰
                    </button>
                </div>
                <ul className={`nav-list ${isSidebarOpen ? "active" : ""}`}>
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" ? "selected" : ""}>
                            Home
                        </Link>
                    </li>
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <Link
                            to="/projects"
                            className={location.pathname === "/projects" ? "selected" : ""}
                        >
                            Projects
                        </Link>
                    </li>
                    <hr className="content-separator" />
                    <li className="nav-item">
                        <Link
                            to="/info"
                            className={location.pathname === "/info" ? "selected" : ""}
                        >
                            Info
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
