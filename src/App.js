import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Info from "./pages/Info";
import Footer from "./components/Footer";
import Down from "./components/Down";
import { fetchJsonData } from "./utils/fetch";

function App() {
    const [myData, setMyData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchJsonData();
            setMyData(data);
        };
        fetchData();
    }, []);

    if (myData === null) return null;

    return (
        <Router>
            <Header text="<Swet/>" />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Home
                            intro={myData.intro}
                            about={myData.about}
                            skills={myData.skills}
                            education={myData.education}
                        />
                    }
                />
                <Route
                    exact
                    path="/work"
                    element={<Work projects={myData.projects} workExp={myData.workExp} />}
                />
                <Route exact path="/info" element={<Info infoList={myData.infoList} />} />
            </Routes>
            <Down />
            <Footer text="Swet Portfolio" contacts={myData.contacts} />
        </Router>
    );
}

export default App;
