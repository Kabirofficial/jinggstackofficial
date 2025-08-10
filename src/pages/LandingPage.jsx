import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hyperspeed from "../components/HyperSpeed";
import { useMediaQuery } from "react-responsive";

const StyledLinkButton = styled(Link)`
  align-items: center;
  /* New gradient using the theme's core purple colors */
  background-image: linear-gradient(144deg, #a855f7, #6a00ff 50%, #2e003e);
  border: 0;
  border-radius: 8px;
  /* Shadow color updated to match the theme's glow */
  box-shadow: rgba(106, 0, 255, 0.3) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 18px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  &:active,
  &:hover {
    outline: 0;
  }

  span {
    /* Inner background changed to solid black to match the page background */
    background-color: #000000;
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  &:hover span {
    background: none;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const LandingPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const headingStyle = {
    color: "rgba(178, 102, 255, 0.9)",
    textShadow: "0 0 10px rgba(178, 102, 255, 0.7), 0 0 20px rgba(102, 0, 153, 0.7)",
    fontSize: isMobile ? "2.2rem" : "4rem",
    fontWeight: "900",
    lineHeight: "1.2",
    padding: "0 1rem",
    marginBottom: '2.5rem'
  };

  return (
    <div className="bg-black" style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
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
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}
      />
      
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          width: "90%",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h1 style={headingStyle}>
          Build scalable, secure, and efficient web applications with JinggStack
        </h1>
        
        <StyledLinkButton to="/home">
            <span>Enter Site</span>
        </StyledLinkButton>
      </div>
    </div>
  );
};

export default LandingPage;