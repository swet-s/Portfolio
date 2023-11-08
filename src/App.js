import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Info from "./pages/Info";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Header text="<Swet/>" />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/info" element={<Info />} />
            </Routes>
            <Footer text="Swet Portfolio" />
        </Router>
    );
}

export default App;
