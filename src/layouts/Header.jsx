import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { instance } from "../api";
import { cartTotalSelector } from "../app/slices/cart/selectors";

const Header = () => {
  // useEffect(() => {
  //   instance.get("/protection").then((res) => {
  //     console.log(res);
  //   });
  // }, []);
  const total = useSelector(cartTotalSelector);
  return (
    <div className=" bg-transparent border-b border-gray-500 p-3">
      <div className=" flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="100"
            viewBox="0 0 64 116"
            fill="none"
          >
            <rect
              width="63"
              height="115"
              transform="translate(0.5 0.5)"
              fill="none"
            />
            <line x1="14.5" y1="15.5" x2="14.5" y2="105.5" stroke="gray" />
            <line
              x1="14.4569"
              y1="15.2969"
              x2="54.4569"
              y2="105.297"
              stroke="gray"
            />
            <line x1="15" y1="62" x2="35" y2="62" stroke="gray" />
            <line
              x1="14.4869"
              y1="15.3864"
              x2="35.4869"
              y2="105.386"
              stroke="gray"
            />
            <line
              x1="35.5097"
              y1="105.402"
              x2="53.5097"
              y2="15.4019"
              stroke="gray"
            />
            <line x1="53.5" y1="15.4944" x2="54.5" y2="105.494" stroke="gray" />
            <line x1="14" y1="15" x2="54" y2="15" stroke="gray" />
            <line x1="34.5" y1="15.4944" x2="35.5" y2="105.494" stroke="gray" />
            <path
              d="M14.0771 84.974C14.4156 89.2975 15.8584 93.4186 18.2315 96.8405C20.6047 100.262 23.807 102.839 27.4523 104.26C31.0977 105.681 35.0306 105.885 38.7769 104.849C42.5232 103.812 45.9231 101.579 48.5666 98.4176C51.2102 95.2564 52.9847 91.3026 53.6761 87.0327C54.3676 82.7627 53.9466 78.3589 52.4637 74.3521C50.9809 70.3453 48.4996 66.9064 45.319 64.4501C42.1383 61.9937 38.394 60.6248 34.5374 60.5081L34.505 61.8657C38.1288 61.9752 41.6471 63.2616 44.6358 65.5697C47.6245 67.8778 49.956 71.1091 51.3493 74.8741C52.7427 78.6391 53.1383 82.7771 52.4886 86.7893C51.8388 90.8015 50.1715 94.5167 47.6874 97.487C45.2034 100.457 42.0088 102.556 38.4886 103.53C34.9684 104.504 31.2729 104.312 27.8475 102.977C24.4222 101.642 21.4132 99.2205 19.1833 96.0051C16.9533 92.7897 15.5976 88.9174 15.2796 84.8549L14.0771 84.974Z"
              fill="rgb(112,26,117)"
            />
            <path
              d="M54 39C54 34.2833 52.7921 29.6758 50.5333 25.7766C48.2745 21.8775 45.0694 18.8673 41.3349 17.1375C37.6004 15.4076 33.5093 15.0383 29.5938 16.0774C25.6782 17.1166 22.1193 19.5161 19.3801 22.964C16.6409 26.4119 14.848 30.7485 14.2348 35.4098C13.6215 40.0711 14.2162 44.8414 15.9415 49.1002C17.6668 53.3591 20.4428 56.9093 23.9086 59.2892C27.3743 61.6691 31.3694 62.7685 35.3741 62.4445L35.2914 61.0341C31.5276 61.3386 27.7729 60.3054 24.5157 58.0686C21.2584 55.8319 18.6494 52.4952 17.0279 48.4926C15.4064 44.49 14.8475 40.0067 15.4238 35.6258C16.0002 31.2449 17.6852 27.1691 20.2596 23.9287C22.8341 20.6882 26.1788 18.433 29.8588 17.4564C33.5389 16.4798 37.3838 16.8269 40.8937 18.4527C44.4035 20.0784 47.4158 22.9076 49.5387 26.5721C51.6615 30.2367 52.7968 34.5671 52.7968 39H54Z"
              fill="rgb(112,26,117)"
            />
          </svg>
          <Link to="/" className="link">
            <span className="self-center whitespace-nowrap text-gray-500">
              <h1>Amatis</h1>
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="relative ml-2 ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block placeholder-gray-500 w-[11rem] bg-transparent pl-8 border-2 border-fuchsia-900 text-fuchsia-900 rounded-lg text-xs"
              placeholder="what are you looking for?"
            />
          </div>
          <Link to={"/auth"} className="decoration-transparent">
            <span className=" text-gray-500">
              <h3 className="m-4">Management</h3>
            </span>
          </Link>
          <div className="flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgb(112,26,117)"
              version="1.1"
              id="Capa_1"
              width="20px"
              height="20px"
              viewBox="0 0 902.86 902.86"
              stroke="rgb(112,26,117)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z" />{" "}
                    <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z" />{" "}
                  </g>
                </g>{" "}
              </g>
            </svg>
            <Link to={"/basket"} className="link text-gray-500">
              <h3 className="m-2">Cart({total})</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
