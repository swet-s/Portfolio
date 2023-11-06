import React from "react";
import "../components/DataBar.css";

function DataBar({ data }) {
    const handleCopy = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => alert("Copied to clipboard"))
            .catch((error) => console.error("Failed to copy: ", error));
    };

    return (
        <div className="data-bar">
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <span className="list-content-type">{item.name}</span>
                        <span className="list-content-data">{item.data}</span>
                        <span className="copy-button" onClick={() => handleCopy(item.data)}>
                            Copy
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DataBar;
