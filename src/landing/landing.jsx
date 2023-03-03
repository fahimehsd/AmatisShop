import React from "react";

const landing = () => {
  return (
    <div>
      {" "}
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <defs>
          {" "}
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            {" "}
            <stop
              id="stop1"
              stop-color="rgba(96.982, 15.072, 157.013, 1)"
              offset="0%"
            ></stop>{" "}
            <stop
              id="stop2"
              stop-color="rgba(225.316, 117.175, 179.825, 1)"
              offset="100%"
            ></stop>{" "}
          </linearGradient>{" "}
        </defs>{" "}
        <path
          fill="url(#sw-gradient)"
          d="M17.9,-25.3C25.1,-23.3,34,-21.5,36.5,-16.5C38.9,-11.6,34.8,-3.6,32.1,3.6C29.5,10.8,28.3,17.1,24.6,21.2C20.9,25.2,14.7,27,8,30.5C1.3,33.9,-5.8,39,-10.5,37.1C-15.3,35.1,-17.7,26.2,-19.5,19.5C-21.3,12.7,-22.6,8.1,-26.5,1.9C-30.3,-4.3,-36.7,-11.9,-34.9,-16.1C-33.2,-20.2,-23.5,-20.7,-16.3,-22.8C-9.1,-24.9,-4.6,-28.5,0.4,-29.2C5.4,-29.8,10.7,-27.4,17.9,-25.3Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s;"
          stroke="url(#sw-gradient)"
        ></path>{" "}
      </svg>
    </div>
  );
};

export default landing;
