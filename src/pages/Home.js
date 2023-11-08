import React from "react";
import myData from "../res/my-data.json";
import "./Home.css";

const Home = () => {
    return (
        <div className="container">
            <h2>About Me</h2>
            <p className="description card">{myData.about}</p>
        </div>
    );
};

export default Home;
