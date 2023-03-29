import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../sample_front/configs/variables.config";
import PanelProductDelete from "./PanelProductDelete";
import PanelProductEditModal from "./PanelProductEditModal";
import { baseURL } from "../../../api/constants";
function PanelProductTable() {
  const [Post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(2);
  const getData = () => {
    axios.get(`${BASE_URL}/products`).then((res) => setPost(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const IndexOfLastPost = currentPage * PostPerPage;
  const IndexOfFirstPost = IndexOfLastPost - PostPerPage;
  const CurrentPosts = Post.slice(IndexOfFirstPost, IndexOfLastPost);

  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(Post.length / PostPerPage); i++)
    PageNumbers.push(i);
  return (
    <>
      {Post.length >= 0 ? (
        <div>
          <table className="mx-auto">
            <thead>
              <tr className="border-b-4 border-gray-500">
                <th className="p-4">Product's Count</th>
                <th className="p-4">Product's Picture</th>
                <th className="p-4">Product's Name</th>
                <th className="p-4">Product's Price</th>
                <th className="p-4">Product's Categorization</th>
              </tr>
            </thead>
            <tbody>
              {CurrentPosts.map((item, idx) => {
                return (
                  <tr key={idx} className=" tr ">
                    <td>{item.id}</td>
                    <td className="flex justify-center">
                      <img
                        className="w-20 h-26 bg-white my-3 p-2 "
                        src={
                          item.thumbnail && `${baseURL}/files/${item.thumbnail}`
                        }
                        alt="pic"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      {item.category} / {item.subcategory}
                    </td>
                    <td>
                      <PanelProductDelete {...item} />
                    </td>
                    <td>
                      <PanelProductEditModal {...item} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
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
        <p className="p-40 text-8xl font-bold">loading ....</p>
      )}
    </>
  );
}
export default PanelProductTable;
