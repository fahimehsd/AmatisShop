import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../sample_front/configs/variables.config";

const PanelOrdersTable = () => {
  const [order, setOrder] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/orders`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.log(err));
  }, []);
  const IndexOfLastPost = currentPage * PostPerPage;
  const IndexOfFirstPost = IndexOfLastPost - PostPerPage;
  const CurrentPosts = order.slice(IndexOfFirstPost, IndexOfLastPost);

  const PageNumbers = [];
  for (let i = 1; i <= Math.ceil(order.length / PostPerPage); i++)
    PageNumbers.push(i);

  const ordersInfo = () => {
    return order.map((order) => (
      <tr key={order.id} className=" tr p-4">
        <td className="p-4">{order.id}</td>
        <td>
          {order.username}-{order.lastname}
        </td>
        <td>
          {order.products.map((item) => {
            return item.price;
          })}
        </td>
        <td>{order.expectAt}</td>
        <td>
          <button>Details</button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      {order.length >= 0 ? (
        <div>
          <div className="flex justify-end">
            <div className="flex items-center mr-4">
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Delivered
              </label>
            </div>
            <div className="flex items-center mr-4">
              <input
                id="inline-2-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-2-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Pending
              </label>
            </div>
          </div>
          <table className="mx-auto">
            <thead>
              <tr className="border-b-4 border-gray-500">
                <th className="p-4">Order's Count</th>
                <th className="p-4">Username</th>
                <th className="p-4">Total Amount</th>
                <th className="p-4">Order Registration Time</th>
              </tr>
            </thead>
            <tbody>{ordersInfo()}</tbody>
          </table>
          <div
            aria-label="Page navigation example"
            className="flex items-center -space-x-px justify-center mt-4"
          >
            <button
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => {
                if (currentPage >= 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              prev
            </button>
            <div className="flex items-center">
              {PageNumbers.map((PageNumber) => (
                <div
                  key={PageNumber}
                  onClick={() => {
                    setCurrentPage(PageNumber);
                  }}
                  className={
                    PageNumber === currentPage
                      ? "p-2 px-3 leading-tight text-white bg-gray-500 border border-gray-300 cursor-pointer "
                      : "p-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer"
                  }
                >
                  {PageNumber}
                </div>
              ))}
            </div>
            <button
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => {
                if (currentPage < PageNumbers.length) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PanelOrdersTable;
