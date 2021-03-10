import React from "react";
import "./glowEffect.css";

const GlowEffect = () => {
  return (
    // <div style={{ position: "absolute", height: "100%", width: "100%" }}>
    //   <div id="stars-group-1"></div>
    //   <div id="stars-group-2"></div>
    //   <div id="stars-group-3"></div>
    //   <div id="stars-group-4"></div>
    //   <div id="stars-group-5"></div>
    //   <div id="stars-group-6"></div>
    // </div>

    <div
      className="animation-wrapper"
      style={{ position: "absolute", height: "100%", width: "100%" }}
    >
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
    </div>
  );
};
export default GlowEffect;
