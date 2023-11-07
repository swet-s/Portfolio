import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Info from "./pages/Info";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Header text="<Swet/>" />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/info" element={<Info />} />
            </Routes>
            <Footer text="SSwet Portfolio" />
        </Router>
    );
}

export default App;
