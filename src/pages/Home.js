import React from "react";
import { Link } from "react-router-dom";
import myData from "../res/my-data.json";
import "./Home.css";

const Home = () => {
    return (
        <div className="container">
            <h2>About Me</h2>
            <p className="decription">{myData.about}</p>
            <Link to="/projects" className="button">
                View My Projects
            </Link>
            <Link to="/contact" className="button">
                Contact Me
            </Link>
        </div>
    );
};

export default Home;
