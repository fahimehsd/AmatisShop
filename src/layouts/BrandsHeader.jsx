import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { instance } from "../api";
import { cartTotalSelector } from "../app/slices/cart/selectors";

const BrandsHeader = () => {
  const total = useSelector(cartTotalSelector);
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance.get("/products").then((res) => setProducts(res.data));
  }, []);
  const newArray = [];
  products.forEach((obj) => {
    if (!newArray.some((o) => o.brand === obj.brand)) {
      newArray.push({ ...obj });
    }
  });
  return (
    <>
      <div className="amatis">
        <Link to={"/"} className="link">
          <h1 className="text">AMATIS</h1>
        </Link>
        <div className="flex items-center">
          <div className="relative mr-4 ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-700"
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
              className="block placeholder-gray-700 w-[11rem] bg-transparent pl-8 border-2 border-fuchsia-900 text-fuchsia-900 rounded-lg text-xs"
              placeholder="what are you looking for?"
            />
          </div>
          <div className="flex items-center text-gray-700 mr-12">
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
            <Link to={"/basket"} className="link text-gray-700">
              <h3 className="m-2">Cart({total})</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="tabs">
        {newArray.map((item) => {
          return (
            <button className={`tab `}>
              <Link to={`/brands/${item.brand}`} className="link text-gray-700">
                {item.brand}
              </Link>
            </button>
          );
        })}

        {/* 
        <button className={`tab`}>
          <Link to={`/brands/mild`} className="link text-gray-700">
            MILD
          </Link>
        </button>

        <button className={`tab`}>
          <Link to={`/brands/cool`} className="link text-gray-700">
            COOL
          </Link>
        </button> */}
      </div>
    </>
  );
};

export default BrandsHeader;
