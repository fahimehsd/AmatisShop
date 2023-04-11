import React, { useEffect, useState } from "react";
import { baseURL, instance } from "../api/constants";
import { Link } from "react-router-dom";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    instance.get("/products").then((res) => setProducts(res.data));
  });

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    products.filter((product) => {
      return product.name.match(searchInput);
    });
  }
  return (
    <>
      <div onClick={() => setModal(true)} className="relative ml-2 ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
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
          className="block placeholder-gray-500 w-[11rem] bg-transparent pl-8 border-2 border-fuchsia-900 text-fuchsia-900 rounded-lg text-xs"
          placeholder="what are you looking for?"
        />
      </div>
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <input
                    type="search"
                    placeholder="Search here"
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto overflow-y-auto h-32">
                  {products
                    .filter((post) => {
                      if (query === "") {
                        return post;
                      } else if (
                        post.name.toLowerCase().includes(query.toLowerCase())
                      ) {
                        return post;
                      }
                    })
                    .map((post, index) => (
                      <Link
                        to={`/products/${post.category.toUpperCase()}/${
                          post.name
                        }`}
                        state={{ from: { ...post } }}
                        className="link text-gray-700"
                      >
                        <div key={index} className="flex items-center p-2">
                          <img
                            src={`${baseURL}/files/${post.thumbnail}`}
                            className="w-10"
                            alt=""
                          />
                          <p>{post.name}</p>
                        </div>
                      </Link>
                    ))}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Search;
