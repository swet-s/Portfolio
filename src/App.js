import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Info from "./pages/Info";
import Footer from "./components/Footer";

function App() {
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll(".card");
            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight - 50 && rect.bottom > 50;
                if (isVisible) {
                    card.classList.add("visible");
                    card.classList.remove("not-visible");
                } else {
                    card.classList.remove("visible");
                    card.classList.add("not-visible");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Router>
            <Header text="<Swet/>" />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/work" element={<Work />} />
                <Route exact path="/info" element={<Info />} />
            </Routes>
            <Footer text="Swet Portfolio" />
        </Router>
    );
}

export default App;
