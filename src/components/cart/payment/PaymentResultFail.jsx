import React from "react";
import Header from "../../../layouts/Header";

const PaymentResultFail = () => {
  return (
    <div className="px-3">
      <Header />
      <div className="flex justify-center items-center mt-40">
        <svg
          width="150px"
          height="150px"
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              opacity="0.1"
              d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
              fill="#700000"
            ></path>{" "}
            <path
              d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
              stroke="#700000"
              stroke-width="1.344"
            ></path>{" "}
            <path
              d="M8 16C8.91221 14.7856 10.3645 14 12.0004 14C13.6362 14 15.0885 14.7856 16.0007 16"
              stroke="#700000"
              stroke-width="1.344"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M9 10.0112V10"
              stroke="#700000"
              stroke-width="1.344"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M15 10.0112V10"
              stroke="#700000"
              stroke-width="1.344"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
        <h1>Payment was not successful.</h1>
      </div>
    </div>
  );
};

export default PaymentResultFail;
