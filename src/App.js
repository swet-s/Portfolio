import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Info from "./pages/Info";
import Footer from "./components/Footer";
import Down from "./components/Down";

function App() {
    return (
        <Router>
            <Header text="<Swet/>" />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/work" element={<Work />} />
                <Route exact path="/info" element={<Info />} />
            </Routes>
            <Down />
            <Footer text="Swet Portfolio" />
        </Router>
    );
}

export default App;
