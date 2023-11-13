import React, { useState } from "react";
import "./CoinToss.css"; // Import your CSS file for styling
import "../Card.css"; // Import your CSS file for styling

const CoinToss = () => {
    const [isFlipping, setIsFlipping] = useState(false);
    const [totalFlip, setTotalFlip] = useState(0);
    const [headFlip, setHeadFlip] = useState(0);
    const [tailFlip, setTailFlip] = useState(0);
    const [result, setResult] = useState("Tap to flip");

    const tossCoin = () => {
        setIsFlipping(true);
        // Simulate a delay for the coin flip animation
        setTimeout(() => {
            const randomResult = Math.random() < 0.5 ? "Heads" : "Tails";
            setResult(randomResult);
            setTotalFlip((prevCount) => prevCount + 1);
            if (randomResult === "Heads") setHeadFlip((prevCount) => prevCount + 1);
            else setTailFlip((prevCount) => prevCount + 1);
            setIsFlipping(false);
        }, 1000);
    };

    return (
        <>
            <h2>Flip a Coin</h2>
            <div className="coin-toss card card-large">
                <div className="card-header">
                    <code className="card-status">Heads</code>
                    <code className="card-status">Tails</code>
                </div>
                <div className="card-header-2">
                    <h3 className="card-name">{headFlip}</h3>
                    <h3 className="card-name">{tailFlip}</h3>
                </div>
                <div className="card-header-2">
                    <code className="card-status">
                        {totalFlip !== 0
                            ? `${((headFlip / totalFlip) * 100).toFixed(2)}%`
                            : "50.00%"}
                    </code>
                    <code className="card-status">
                        {totalFlip !== 0
                            ? `${((tailFlip / totalFlip) * 100).toFixed(2)}%`
                            : "50.00%"}
                    </code>
                </div>
                <div className="coin-toss-container">
                    {isFlipping ? (
                        <div className="coin flip"></div>
                    ) : (
                        <div className="coin" onClick={tossCoin} disabled={isFlipping}>
                            {result === "Heads" || result === "Tails" ? (
                                <div className="side result">{result}</div>
                            ) : (
                                <div className="side">{result}</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CoinToss;
