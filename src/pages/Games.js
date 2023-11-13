import React from "react";
import CoinToss from "../components/games/CoinToss";
import FifteenPuzzle from "../components/games/FifteenPuzzle";

const Games = () => {
    return (
        <div className="container">
            <CoinToss />
            <div style={{ height: "15px" }}></div>
            <FifteenPuzzle />
        </div>
    );
};

export default Games;
