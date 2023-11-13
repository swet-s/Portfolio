import React, { useState, useEffect } from "react";
import "./FifteenPuzzle.css";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const generateTiles = () => {
    const tiles = Array.from({ length: 15 }, (_, index) => index + 1);
    tiles.push(null); // Representing the empty space
    shuffleArray(tiles);
    return tiles;
};

const isSolvable = (tiles) => {
    // Implement solvability check logic if needed
    return true;
};

const initialState = {
    tiles: generateTiles(),
};

const FifteenPuzzle = () => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        if (!isSolvable(state.tiles)) {
            // Reshuffle if the initial state is not solvable
            setState({ tiles: generateTiles() });
        }
    }, [state.tiles]);

    const handleTileClick = (index) => {
        const currentTiles = [...state.tiles];

        // Check if the clicked tile can be moved
        if (currentTiles[index] === null) {
            return;
        }

        // Implement tile movement logic
        const emptyIndex = currentTiles.indexOf(null);
        [currentTiles[index], currentTiles[emptyIndex]] = [
            currentTiles[emptyIndex],
            currentTiles[index],
        ];

        setState({ tiles: currentTiles });
    };

    return (
        <>
            <h2>15-Puzzle</h2>
            <div className="coin-toss card card-large">
                <div className="puzzle-container">
                    {state.tiles.map((value, index) => (
                        <div
                            key={index}
                            className={`puzzle-tile ${value === null ? "empty" : ""}`}
                            onClick={() => handleTileClick(index)}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FifteenPuzzle;
