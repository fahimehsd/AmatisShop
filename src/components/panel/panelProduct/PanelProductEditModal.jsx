import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalManager from "react-overlays/esm/ModalManager";
import Modal from "react-overlays/Modal";
import { BASE_URL } from "../../../sample_front/configs/variables.config";
const PanelProductEditModal = () => {
  const [showModal, setShowModal] = useState(false);
  var handleClose = () => setShowModal(false);
  const renderBackdrop = (props) => {
    return <div className="backdrop" {...props} />;
  };
  var handleSave = () => {
    console.log("success");
  };
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/category`)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/subcategory`)
      .then((res) => setSubcategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6"
            stroke="gray"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Editing Product</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Product's Picture
                    </label>
                    <input
                      type={"file"}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Product's Name
                    </label>
                    <input
                      type={"text"}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Product's Categorization
                    </label>
                    <select name="" id="">
                      {category.map((category) => {
                        return (
                          <option value={category.name}>
                            {category.name.toLowerCase()}
                          </option>
                        );
                      })}
                    </select>
                    <label className="block text-black text-sm font-bold mb-1">
                      Product's subCategorization
                    </label>
                    <select name="" id="">
                      {subcategory.map((product) => {
                        return (
                          <option value={product.name}>{product.name}</option>
                        );
                      })}
                    </select>
                    <label className="block text-black text-sm font-bold mb-1">
                      Product's Description
                    </label>
                    <input
                      type={"text"}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      value={product.map((product) => product.description)}
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default PanelProductEditModal;
