import React, { useEffect, useState } from "react";
import { baseURL } from "../api";
import PanelHeader from "../layouts/PanelHeader";
import { urlReq } from "../utils/api.util";

const Panel = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    urlReq("products").then((res) => setProducts(res.data));
  }, []);
  useEffect(() => {
    urlReq("orders").then((res) => setOrders(res.data));
  }, []);
  const amountArr = products.slice(-6);
  const amountOrder = orders.slice(-8);
  return (
    <div className=" bg-gray-100 grid grid-cols-5 ">
      <PanelHeader />

      <div className=" h-screen m-3 grid grid-rows-3 grid-col-3 gap-4 rounded-md p-5 col-span-4  bg-pink-50 border-[1px] border-fuchsia-900">
        <div className=" bg-gray-200 rounded-md shadow-lg p-5  border-[1px] border-fuchsia-900 ">
          <h2 className=" text-fuchsia-900">Management Panel</h2>
          <h5 className=" text-gray-500">Welcome </h5>
        </div>
        <div className="col-start-2 col-span-2 row-span-3 bg-gray-200  shadow-lg rounded-md p-5 border-[1px] border-fuchsia-900">
          <div className="grid ">
            <div>
              <h2 className=" text-fuchsia-900 pb-3">Newest Products</h2>
              <div className=" flex flex-col gap-2 ">
                {amountArr.length <= 6
                  ? amountArr.map((product) => {
                      return (
                        <div key={product.id} className="flex gap-1 ">
                          <div>
                            <img
                              src={`${baseURL}/files/${product.thumbnail}`}
                              className="w-[3rem] h-[3rem] bg-white shadow-md rounded-full p-1"
                              alt="pic"
                            />
                          </div>
                          <div>
                            <p className="text-gray-600 mb-0">{product.name}</p>
                            <p className="text-gray-500">${product.price}</p>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
            <div
              className=" col-start-2 bg-fuchsia-900 w-full text-4xl pt-28 pr-12  shadow-lg rounded-md border-[1px] border-fuchsia-900 text-gray-300 "
              style={{ writingMode: "vertical-rl" }}
            >
              <p className="hover:animate-ping"> AMATIS SHOP</p>
            </div>
          </div>
        </div>

        <div className="row-start-2 row-span-2 bg-fuchsia-900 shadow-lg rounded-md p-5">
          <h2 className=" text-gray-400">Orders</h2>
          <ul className="py-2 text-gray-300 ul">
            {amountOrder.length <= 8
              ? amountOrder.map((order) => {
                  return (
                    <li key={order.id} className="border-b p-2">
                      {order.username} {order.lastname}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Panel;
