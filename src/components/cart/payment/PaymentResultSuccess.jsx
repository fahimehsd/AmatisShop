import React from "react";
import Header from "../../../layouts/Header";

const PaymentResultSuccess = () => {
  return (
    <div className="px-3">
      <Header />
      <div className="flex justify-center items-center mt-40">
        <svg
          className="mr-5"
          width="150px"
          height="150px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>emoji_happy_square_round [#0f5c00]</title>{" "}
            <desc>Created with Sketch.</desc> <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke-width="0.0002"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-220.000000, -6279.000000)"
                fill="#0f5c00"
              >
                {" "}
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {" "}
                  <path
                    d="M180,6126 C180,6126.552 179.552,6127 179,6127 L177,6127 C176.448,6127 176,6126.552 176,6126 C176,6125.448 176.448,6125 177,6125 L179,6125 C179.552,6125 180,6125.448 180,6126 L180,6126 Z M171.09,6130.704 C171.781,6133.627 176.219,6133.523 176.91,6130.6 C177.019,6130.136 177.409,6130 177.885,6130 L177.902,6130 C178.513,6130 179.01,6130.444 178.893,6131.043 C177.886,6136.181 170.114,6136.077 169.107,6130.939 C168.99,6130.34 169.487,6130 170.098,6130 L170.115,6130 C170.591,6130 170.981,6130.24 171.09,6130.704 L171.09,6130.704 Z M172,6126 C172,6126.552 171.552,6127 171,6127 L169,6127 C168.448,6127 168,6126.552 168,6126 C168,6125.448 168.448,6125 169,6125 L171,6125 C171.552,6125 172,6125.448 172,6126 L172,6126 Z M182,6136 C182,6136.552 181.552,6137 181,6137 L167,6137 C166.448,6137 166,6136.552 166,6136 L166,6122 C166,6121.448 166.448,6121 167,6121 L181,6121 C181.552,6121 182,6121.448 182,6122 L182,6136 Z M184,6121 C184,6119.895 183.105,6119 182,6119 L166,6119 C164.895,6119 164,6119.895 164,6121 L164,6137 C164,6138.105 164.895,6139 166,6139 L182,6139 C183.105,6139 184,6138.105 184,6137 L184,6121 Z"
                    id="emoji_happy_square_round-[#0f5c00]"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <h1>Payment was successful.</h1>
      </div>
    </div>
  );
};

export default PaymentResultSuccess;
