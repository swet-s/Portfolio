import React from "react";
import ItemBox from "../boxes/ItemBox";
import "../Card.css";

const Skill = ({skills}) => {
    //Todo Copy All Skills
    const handleCopy = (skill) => {
        let text = `${skills.name} : ${skill.data}`;
        navigator.clipboard
            .writeText(text)
            .then(() => alert("Copied to clipboard"))
            .catch((error) => console.error("Failed to copy: ", error));
    };

    return (
        <>
            <h2>My Skills</h2>
            <div className="card card-large">
                {skills.map(
                    (skill, index) =>
                        skill.name && (
                            <ItemBox key={index} name={skill.name} data={skill.data} copy={true} />
                        )
                )}
            </div>
        </>
    );
};

export default Skill;
