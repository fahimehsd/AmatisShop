import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../api";

const SubCategories = ({ categoryName, subcategoryName }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance
      .get(
        `/products?category=${categoryName.toLowerCase()}&subcategory=${subcategoryName}`
      )
      .then((res) => setProducts(res.data));
  }, [categoryName, subcategoryName]);

  const product = () => {
    return products.map((item) => {
      return (
        <div
          key={item.id}
          className="p-4 mx-5 mt-5 border-img bg w-[18rem] h-[25rem] flex flex-col hover:scale-105  items-center shadow-md rounded-md"
        >
          <Link
            to={`/products/${categoryName}/${item.name}`}
            state={{ from: { ...item } }}
            className="link text-gray-800 flex flex-col items-center"
          >
            <img
              src={item.image[0]}
              alt="pic"
              className=" border-img w-[12rem] h-[12rem] p-3 mb-3 rounded-md bg-white"
            />
            <p className="text-gray-800 font-bold truncate">{item.name}</p>
            <p className="text-gray-600 ">${item.price}</p>
          </Link>
          <button className="bg-white p-3 rounded-md w-full border-img">
            Add To Cart
          </button>
        </div>
      );
    });
  };

  return (
    <div className=" px-2 h-full grid grid-cols-4  items-center justify-items-center">
      {product()}
    </div>
  );
};

export default SubCategories;
