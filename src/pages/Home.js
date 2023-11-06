import React from "react";
import { Link } from "react-router-dom";
import DataBar from "../components/DataBar";
import myData from "../res/my-data.json";
import "./Home.css";

const Home = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p className="decription">{myData.about}</p>
            <Link to="/projects" className="button">
                View My Projects
            </Link>
            <Link to="/contact" className="button">
                Contact Me
            </Link>

            <h2>List of Data</h2>
            <DataBar data={myData.infoList} />
        </div>
    );
};

export default Home;
