import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../../loading/Loading";
import { BASE_URL } from "../../../sample_front/configs/variables.config";
import PanelQuantityEdit from "./PanelQuantityEdit";

const PanelQuantityTable = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(5);

  const getProducts = () => {
    axios
      .get(`${BASE_URL}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProducts();
  }, []);
  const IndexOfLastPost = currentPage * PostPerPage;
  const IndexOfFirstPost = IndexOfLastPost - PostPerPage;
  const CurrentPosts = products.slice(IndexOfFirstPost, IndexOfLastPost);

  const PageNumbers = [];
  const [quantity, setQuantity] = useState("");

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const quantityChangeHandler = (e) => {
    setQuantity(e.target.value);
  };
  for (let i = 1; i <= Math.ceil(products.length / PostPerPage); i++)
    PageNumbers.push(i);
  return (
    <>
      {products.length >= 0 ? (
        <div>
          <table className="mx-auto">
            <tr className=" border-b-4 border-gray-500">
              <th className="px-4">Product's Count</th>
              <th className="px-4">Product's Name</th>
              <th className="px-4">Product's Price</th>
              <th className="px-4">Product's Quantity</th>
            </tr>
            {CurrentPosts.map((product) => {
              return (
                <tr key={product.id} className="tr">
                  <td className="p-4">{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <PanelQuantityEdit {...product} />
                  </td>
                </tr>
              );
            })}
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PanelQuantityTable;
