import React from "react";
import "./effect.css";
const div = Array(28).fill("");
const div2 = Array(10).fill("");

function Effect() {
  return (
    <div className="effect-wrap">
      <div className="effect effect-1"></div>
      <div className="effect effect-1"></div>
      <div className="effect effect-1"></div>
      <div className="effect effect-1"></div>
      <div className="effect effect-1" style={{ width: "40px" }}></div>
      <div className="effect effect-1" style={{ top: "100px" }}></div>
      <div className="effect effect-2">
        {div.map((div, i) => {
          return <div key={i}></div>;
        })}
      </div>
      <div className="effect effect-3"></div>
      <div className="effect effect-4"></div>
      <div
        className="effect effect-4 eff4"
        style={{
          top: "100px",
          animation:
            "topBounce 4s ease-in-out infinite spin 15s linear infinite",
        }}
      ></div>
      <div className="effect effect-5">
        {div2.map((div, i) => {
          return <div key={i}></div>;
        })}
      </div>
    </div>
  );
}

export default Effect;
