import React from "react";
import "./Down.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

const Down = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const nextPage = () => {
        const currentPageName = location.pathname.split("/").pop();

        if (currentPageName === "") navigate("/work");
        else if (currentPageName === "work") navigate("/info");
        else if (currentPageName === "info") {
            navigate("/");
        } else navigate("/");

        window.scrollTo(0, 0);
    };

    return (
        <div className="down">
            <button className="round" onClick={nextPage}>
                <FontAwesomeIcon className="down-icon" icon={faArrowDown}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Down;
