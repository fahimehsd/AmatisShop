import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../sample_front/configs/variables.config";
import PanelProductEditModal from "./PanelProductEditModal";

function PanelProductTable() {
  const [Post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(5);
  const getData = () => {
    axios.get(`${BASE_URL}/products`).then((res) => setPost(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  //get current posts

  const IndexOfLastPost = currentPage * PostPerPage;
  const IndexOfFirstPost = IndexOfLastPost - PostPerPage;
  const CurrentPosts = Post.slice(IndexOfFirstPost, IndexOfLastPost);
  console.log(IndexOfFirstPost, IndexOfLastPost, CurrentPosts);

  // pagination stuff
  const PageNumbers = [];

  // let NumOfTotalPost = Post.length;
  for (let i = 1; i <= Math.ceil(Post.length / PostPerPage); i++)
    PageNumbers.push(i);
  return (
    <>
      {Post.length >= 0 ? ( //data is preset then show this
        <div>
          <table className="mx-auto">
            <tr className="border-b-4 border-gray-500">
              <th className="p-4">Product's Count</th>
              <th className="p-4">Product's Picture</th>
              <th className="p-4">Product's Name</th>
              <th className="p-4">Product's Price</th>
              <th className="p-4">Product's Categorization</th>
            </tr>

            {/* show the post here */}
            {CurrentPosts.map((item, idx) => {
              return (
                <tr key={idx} className=" tr ">
                  <td>{item.id}</td>
                  <td className="flex justify-center">
                    <img
                      className="w-20 h-26 bg-white my-3 "
                      src={item.image[0]}
                      alt="pic"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    {item.category} / {item.subcategory}
                  </td>
                  <td>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                        viewBox="0 0 1024 1024"
                        fill="gray"
                        class="icon"
                        version="1.1"
                      >
                        <path
                          d="M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z"
                          fill=""
                        />
                        <path
                          d="M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </td>
                  <td>
                    <PanelProductEditModal />
                  </td>
                </tr>
              );
            })}
          </table>
          {/* previous and next button */}
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
        <p className="p-40 text-8xl font-bold">loading ....</p> //if data hasn't come yet show this
      )}
    </>
  );
}
export default PanelProductTable;
