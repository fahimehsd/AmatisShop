import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { baseURL, instance } from "../../api";
import { addToCart } from "../../app/slices/cart/cartSlice";

const SubCategoriesProducts = ({ categoryName }) => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance
      .get(`/products?category=${categoryName.toLocaleLowerCase()}`)
      .then((res) => setProducts(res.data));
  }, [categoryName]);

  const product = () => {
    return products.map((item) => {
      return (
        <div
          key={item.id}
          className="p-4 mx-5 mt-5 border-img bg w-[18rem] h-[25rem] flex flex-col items-center shadow-md rounded-md hover:scale-105 "
        >
          <Link
            to={`/products/${categoryName}/${item.name}`}
            state={{ from: { ...item } }}
            className="link text-gray-800 flex flex-col items-center"
          >
            <img
              src={`${baseURL}/files/${item.thumbnail}`}
              alt="pic"
              className=" border-img w-[12rem] h-[12rem] p-3 mb-3 rounded-md bg-white"
            />
            <p className="text-gray-800 font-bold truncate">{item.name}</p>
            <p className="text-gray-600 ">${item.price}</p>
          </Link>
          <button
            onClick={() => dispatch(addToCart(item))}
            className="bg-white p-3 rounded-md w-full border-img"
          >
            Add To Cart
          </button>
        </div>
      );
    });
  };

  return (
    <div className="px-2 h-full grid grid-cols-4  items-center justify-items-center">
      {product()}
    </div>
  );
};

export default SubCategoriesProducts;
