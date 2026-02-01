/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Hyperspeed from "../components/HyperSpeed";
import Button from "../components/ui/Button";

const LandingPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => { },
          onSlowDown: () => { },
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x120026,
            islandColor: 0x2e003e,
            background: 0x000000,
            shoulderLines: 0x6a00ff,
            brokenLines: 0x9b59b6,
            leftCars: [0x9b59b6, 0x8e44ad, 0x7d3c98],
            rightCars: [0x6a00ff, 0x5b00e6, 0x4c00cc],
            sticks: 0x9b59b6,
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-black leading-tight mb-10 px-4"
          style={{
            color: "rgba(178, 102, 255, 0.9)",
            textShadow:
              "0 0 20px rgba(178, 102, 255, 0.5), 0 0 40px rgba(102, 0, 153, 0.5)",
          }}
        >
          Build scalable, secure, and efficient web applications with JinggStack
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            to="/home"
            variant="primary"
            className="text-xl px-2 py-1 min-w-[180px]"
          >
            Enter Site
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
