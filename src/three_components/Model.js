import React, { Suspense } from "react";

import classes from "./Model.module.css";

import { Canvas } from "@react-three/fiber";
import Laptop from "./models/laptop/Laptop";
import { Html, Loader } from "@react-three/drei";

const Model = () => {
    const adjustForScreenSize = () => {
        let screenScale, screenPosition, rotation;

        screenScale = [1.1, 1.2, 1.2];
        screenPosition = [0, 0, -290];
        rotation = [Math.PI / 18, -Math.PI / 9, 0];
        return [screenScale, screenPosition, rotation];
    };

    const [laptopScale, laptopPosition, LaptopRotation] = adjustForScreenSize();

    return (
        <Canvas className={classes.canvas} camera={{ near: 0.1, far: 1000 }}>
            <Suspense
                fallback={
                    <Html>
                        <Loader />
                    </Html>
                }
            >
                <ambientLight />
                <Laptop position={laptopPosition} scale={laptopScale} rotation={LaptopRotation} />
            </Suspense>
        </Canvas>
    );
};

export default Model;
