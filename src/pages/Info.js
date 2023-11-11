import React from "react";
import myData from "../res/my-data.json";
import "./Info.css";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Info() {
    const handleCopy = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => alert("Copied to clipboard"))
            .catch((error) => console.error("Failed to copy: ", error));
    };

    return (
        <div className="container">
            <h2>My Info</h2>
            {myData.infoList.map((item, index) => (
                <div key={index} className="info card">
                    <code className="list-name">{item.name}</code>
                    <div className="list-data">
                        <code className="data-text">{item.data}</code>
                        <span className="copy-button" onClick={() => handleCopy(item.data)}>
                            <FontAwesomeIcon icon={faCopy} />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Info;
