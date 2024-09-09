import React, { useEffect, useState } from "react";
import classes from "./Intro.module.css";
import Model from "../../three_components/Model";

const Intro = ({intro}) => {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const textToType1 = intro[0];
    const textToType2 = intro[1];
    const typingSpeed1 = 50;
    const typingSpeed2 = 50;

    useEffect(() => {
        let index1 = 0;
        const typingInterval1 = setInterval(() => {
            setText1(textToType1.slice(0, index1));
            index1++;
            if (index1 > textToType1.length) {
                clearInterval(typingInterval1);
            }
        }, typingSpeed1);

        let index2 = 0;
        const typingInterval2 = setInterval(() => {
            setText2(textToType2.slice(0, index2));
            index2++;
            if (index2 > textToType2.length) {
                clearInterval(typingInterval2);
            }
        }, typingSpeed2);
        return () => {
            clearInterval(typingInterval1);
            clearInterval(typingInterval2);
        };
    }, []);

    return (
        <div className={classes.section}>
            <div className={classes.intro}>
                <div>
                    <p className={classes.introHeader}>{text1}</p>
                    <p className={classes.introSubHeader}>{text2}</p>
                </div>
            </div>
            <Model />
        </div>
    );
};

export default Intro;
