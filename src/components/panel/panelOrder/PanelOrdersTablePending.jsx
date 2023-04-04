import React, { useEffect, useState } from "react";
import { instance } from "../../../api";
import { urlReq } from "../../../utils/api.util";
import PanelOrdersDetails from "./PanelOrdersDetails";
import PanelOrdersTable from "./PanelOrdersTable";

const PanelOrdersTablePending = () => {
  const [order, setOrder] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    instance.get("orders?delivered=false").then((res) => setOrder(res.data));
  }, []);

  const IndexOfLastPost = currentPage * PostPerPage;
  const IndexOfFirstPost = IndexOfLastPost - PostPerPage;
  const CurrentPosts = order.slice(IndexOfFirstPost, IndexOfLastPost);

  const PageNumbers = [];
  for (let i = 1; i <= Math.ceil(order.length / PostPerPage); i++)
    PageNumbers.push(i);

  const ordersInfo = () => {
    return order.map((order) => (
      <tr key={order.id} className="tr p-4">
        <td className="p-4">{order.id}</td>
        <td>
          {order.username}-{order.lastname}
        </td>
        <td>${order.prices}</td>
        <td>{order.expectAt}</td>
        <td>
          <PanelOrdersDetails order={order} />
        </td>
      </tr>
    ));
  };
  return (
    <div>
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
  );
};

export default PanelOrdersTablePending;
