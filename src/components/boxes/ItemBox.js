import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ItemBox.css";

const ItemBox = ({ name, data, copy }) => {
    const handleCopy = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => alert("Copied to clipboard"))
            .catch((error) => console.error("Failed to copy: ", error));
    };

    return (
        <div className="item-box">
            <code className="item-name">{name}</code>
            <div className="item-data">
                <div className="item-text">
                    {Array.isArray(data) ? (
                        <>
                            {data.map((tech, index) => (
                                <code key={index}>
                                    {tech}
                                    {index !== data.length - 1 ? "," : ""}
                                </code>
                            ))}
                        </>
                    ) : (
                        <code className="data-text">{data}</code>
                    )}
                </div>
                {copy && (
                    <span className="item-copy" onClick={() => handleCopy(data)}>
                        <FontAwesomeIcon icon={faCopy} />
                    </span>
                )}
            </div>
        </div>
    );
};

export default ItemBox;
