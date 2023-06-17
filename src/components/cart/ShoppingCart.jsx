import React, { useEffect, useState } from "react";
import { baseURL, instance } from "../../api/constants";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartTotalPriceSelector } from "../../app/slices/cart/selectors";
import { decrement, increment } from "../../app/slices/cart/cartSlice";
import { clear } from "../../app/slices/cart/cartSlice";

const ShoppingCart = ({ items }) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);

  const navigate = useNavigate();
  const [item, setItem] = useState(items);
  const checkout = () => {
    navigate("/checkout", {
      state: {
        items
      }
    });
  };
  const cartItemDeleteHandler = (id) => {
    const newItem = item.filter((_, i) => i !== id);
    setItem(newItem);
  };
  return (
    <div className="flex m-10">
      <div className=" w-2/3">
        <h2 className="text-gray-700 mb-4 ">Shopping Cart</h2>
        <div>
          <table className="text-gray-700 ">
            <thead className="border-y">
              <tr>
                <th className="p-4">PRODUCT DETAILS</th>
                <th>QUANTITY</th>
                <th className="px-5">PRICE</th>
                <th className="px-5">TOTAL</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {item.map((item, i) => {
                return (
                  <tr className="border-b">
                    <Link
                      to={`/products/${item.name}`}
                      state={{ from: { ...item } }}
                      className="link text-gray-700"
                    >
                      <td className="flex pr-5">
                        <img
                          src={`${baseURL}/files/${item.thumbnail}`}
                          alt={item.name}
                          className="w-44"
                        />
                        <div>
                          <h5 className="mb-4">{item.name}</h5>
                          <div>
                            <span className="text-gray-500">CODE: </span>
                            <span>{item.id}</span>
                          </div>
                        </div>
                      </td>
                    </Link>
                    <td>
                      <div className="flex items-center">
                        <button
                          className="border px-2 mr-2"
                          disabled={item.quantity === 1}
                          onClick={() => {
                            dispatch(decrement(item.id));
                          }}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="border px-2 ml-2"
                          onClick={() => {
                            dispatch(increment(item.id));
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-5">${item.price}</td>
                    <td className="px-5">${item.quantity * item.price}</td>
                    <td>
                      <div onClick={() => cartItemDeleteHandler(i)}>
                        <svg
                          viewBox="0 0 24 24"
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
                            <path
                              d="M16 9L13.0001 11.9999M13.0001 11.9999L10 15M13.0001 11.9999L10.0002 9M13.0001 11.9999L16.0002 15M8 6H19C19.5523 6 20 6.44772 20 7V17C20 17.5523 19.5523 18 19 18H8L2 12L8 6Z"
                              stroke="#6b6b6b"
                              stroke-width="0.72"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" bg px-10 py-10 w-96 h-96 text-gray-700">
        <h4>ORDER SUMMARY</h4>
        <hr />

        <p>ITEMS: {items.length}</p>
        <div className="flex flex-col mt-10">
          <label>SHIPPING:</label>
          <select className=" p-2 outline-none ">
            <option value="standard">Standard Delivery</option>
            <option value="standard">Gold Delivery</option>
            <option value="standard">Silver Delivery</option>
          </select>
        </div>
        <hr />
        <div className="flex justify-between">
          <h5>TOTAL PRICE: </h5>
          <h5>${totalPrice}</h5>
        </div>
        <button
          type="submit"
          className=" bg-gray-300 text-black w-full mt-2 p-3 hover:bg-gray-500 hover:text-white"
          onClick={() => checkout()}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
