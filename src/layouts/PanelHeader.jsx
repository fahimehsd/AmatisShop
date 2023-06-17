import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { instance } from "../api";
const PanelHeader = () => {
  const [admin, setAdmin] = useState("");
  // useEffect(() => {
  //   instance.get("/whoami").then((res) => setAdmin(res.data));
  // });
  return (
    <div className="sticky px-5 py-3 text-gray-600">
      <div className="flex flex-col items-center ">
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
          <span className="self-center whitespace-nowrap text-fuchsia-900">
            <h1>Amatis</h1>
          </span>
        </Link>
      </div>
      <div className="mt-4 flex flex-col items-center  border-b border-fuchsia-900">
        <div>
          <svg
            width="100px"
            height="100px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.288"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z"
                stroke="#707070"
                strokeWidth="0.384"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#707070"
                strokeWidth="0.384"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <h5>{admin.name}</h5>
        <p className=" text-gray-400 text-xs">Admin</p>
      </div>
      <div className=" py-3">
        <div className="flex mb-2">
          <div>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z"
                  stroke="#701a75"
                  strokeWidth="0.4800000000000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <Link to="/panel" className="link text-gray-600">
            <div>
              <p>Home</p>
            </div>
          </Link>
        </div>
        <div className="flex mb-2">
          <div>
            <svg
              fill="#701a75"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              space="preserve"
              width="30px"
              height="30px"
              stroke="#701a75"
              strokeWidth="0.00032"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  id="perfume_1_"
                  d="M24,31.36H8c-0.75,0-1.36-0.61-1.36-1.36V12c0-0.75,0.61-1.36,1.36-1.36h4.64V6.5 c0-0.474,0.386-0.86,0.86-0.86h0.64V2.5c0-0.474,0.386-0.86,0.86-0.86h2c0.475,0,0.86,0.386,0.86,0.86v3.14h0.64 c0.475,0,0.86,0.386,0.86,0.86v4.14H24c0.75,0,1.36,0.61,1.36,1.36v18C25.36,30.75,24.75,31.36,24,31.36z M8,11.36 c-0.353,0-0.64,0.287-0.64,0.64v18c0,0.353,0.287,0.64,0.64,0.64h16c0.353,0,0.64-0.287,0.64-0.64V12c0-0.353-0.287-0.64-0.64-0.64 H8z M13.36,10.64h5.28V6.5c0-0.076-0.063-0.14-0.14-0.14h-5c-0.076,0-0.14,0.064-0.14,0.14V10.64z M14.86,5.64h2.28V2.5 c0-0.076-0.063-0.14-0.14-0.14h-2c-0.076,0-0.14,0.064-0.14,0.14V5.64z M22.083,26.36H9.833c-0.199,0-0.36-0.161-0.36-0.36v-8.938 c0-0.199,0.161-0.36,0.36-0.36h12.25c0.199,0,0.36,0.161,0.36,0.36V26C22.443,26.199,22.282,26.36,22.083,26.36z M10.193,25.64 h11.529v-8.217H10.193V25.64z M23,7.36c-0.063,0-0.127-0.017-0.186-0.051l-2.5-1.5c-0.17-0.102-0.226-0.323-0.123-0.494 s0.322-0.224,0.494-0.124l2.5,1.5c0.17,0.102,0.226,0.323,0.123,0.494C23.241,7.298,23.122,7.36,23,7.36z M24,4.36h-3.5 c-0.199,0-0.36-0.161-0.36-0.36s0.161-0.36,0.36-0.36H24c0.199,0,0.36,0.161,0.36,0.36C24.36,4.199,24.199,4.36,24,4.36z M20.5,2.86 c-0.122,0-0.241-0.062-0.309-0.175c-0.103-0.17-0.047-0.392,0.123-0.494l2.5-1.5c0.172-0.101,0.392-0.048,0.494,0.124 c0.103,0.17,0.047,0.392-0.123,0.494l-2.5,1.5C20.627,2.843,20.563,2.86,20.5,2.86z"
                ></path>{" "}
                <rect
                  id="_Transparent_Rectangle"
                  fill="none"
                  width="30"
                  height="30"
                ></rect>{" "}
              </g>
            </svg>
          </div>
          <Link to="/panel/products" className="link text-gray-600 ">
            <div>
              <p>Products</p>
            </div>
          </Link>
        </div>
        <div className="flex mb-2">
          <div>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#7a7a7a"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10 13H14M19 9V20H5V9M19 9H5M19 9C19.5523 9 20 8.55228 20 8V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V8C4 8.55228 4.44772 9 5 9"
                  stroke="#701a75"
                  strokeWidth="0.4800000000000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <Link to="/panel/quantity" className="link text-gray-600">
            <div>
              <p>Quantity</p>
            </div>
          </Link>
        </div>
        <div className="flex mb-2">
          <div>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#701a75"
              strokeWidth="0.4800000000000001"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect
                  x="5"
                  y="4"
                  width="14"
                  height="17"
                  rx="2"
                  stroke="#701a75"
                ></rect>{" "}
                <path d="M9 9H15" stroke="#701a75" strokeLinecap="round"></path>{" "}
                <path
                  d="M9 13H15"
                  stroke="#701a75"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M9 17H13"
                  stroke="#701a75"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <Link to={"/panel/orders"} className="link text-gray-600">
            <div>
              <p>Orders</p>
            </div>
          </Link>
        </div>
      </div>

      {/* <div className="inline-flex items-center">
          <div className="flex border-[1px] border-fuchsia-900 ml-2 ">
            <Link to="/panel/products" className="link text-gray-600 ">
              <button className=" px-5 py-4 focus:bg-fuchsia-900 focus:text-white hover:bg-fuchsia-800 hover:text-white">
                <h5> Products</h5>
              </button>
            </Link>
            <Link to="/panel/quantity" className="link text-gray-600">
              <button className="border-x border-fuchsia-900 px-5 py-4  focus:bg-fuchsia-900 focus:text-white hover:bg-fuchsia-800 hover:text-white">
                <h5>Quantities</h5>
              </button>
            </Link>
            <Link to={"/panel/orders"} className="link text-gray-600">
              <button className="px-5 py-4  focus:bg-fuchsia-900 focus:text-white  hover:bg-fuchsia-800 hover:text-white">
                <h5> Orders</h5>
              </button>
            </Link>
          </div>
        </div> */}

      <Outlet />
    </div>
  );
};

export default PanelHeader;
