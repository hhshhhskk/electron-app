import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const dash = keyframes`
  100% { stroke-dashoffset: 0; }
`;

// `animate` prop을 DOM으로 전달하지 않도록 설정
const StyledSVG = styled.svg.withConfig({
  shouldForwardProp: (prop) => prop !== "animate",
})`
  background: linear-gradient(135deg, #aa3bb1, #582a7e);
  max-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 30px 50px -20px rgb(46, 6, 66);

  .text {
    display: ${({ animate }) => (animate ? "block" : "none")};
    font-family: Arial, sans-serif;
    font-size: 20px;
    text-transform: uppercase;
  }

  .text-stroke {
    fill: none;
    stroke: #51256f;
    stroke-width: 1px;
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
    stroke-linecap: butt;
    stroke-linejoin: round;
    animation: ${dash} 2.5s ease-in-out forwards;
  }
`;

const ReloadButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: #fff;
  border: none;
  border-radius: 20px;
  outline: none !important;
  font-size: 11px;
  line-height: 1.5;
  padding: 8px 12px;
  text-transform: uppercase;
  z-index: 10;
  cursor: pointer;
  box-shadow: 0 6px 7px #350e4c;
  transition: all 0.1s cubic-bezier(0.67, 0.13, 0.1, 0.81);

  &:hover {
    box-shadow: 0 4px 4px #350e4c;
    transform: translateY(1px);
  }
  &:active {
    box-shadow: 0 1px 2px #244b94;
    transform: translateY(2px);
  }
`;

const AnimatedText = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleReload = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 200);
  };

  return (
    <>
      <StyledSVG className="intro" viewBox="0 0 200 86" animate={animate}>
        <text textAnchor="start" x="10" y="30" className="text text-stroke">
          일렉트론
        </text>
        <text textAnchor="start" x="10" y="50" className="text text-stroke">
          연습
        </text>
        <text textAnchor="start" x="10" y="70" className="text text-stroke">
          시작!
        </text>
      </StyledSVG>
      <ReloadButton onClick={handleReload}>Reload</ReloadButton>
    </>
  );
};

export default AnimatedText;
