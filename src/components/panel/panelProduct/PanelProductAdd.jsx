import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BASE_URL } from "../../../sample_front/configs/variables.config";
import AddProductForm from "../../forms/AddProductForm";

const PanelProductAdd = () => {
  const [showModal, setShowModal] = useState(false);
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
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z"
              stroke="#701a75"
              strokeWidth="0.4800000000000001"
              strokeLinecap="round"
            ></path>
          </g>
        </svg>
      </button>
      {showModal && <AddProductForm setShowModal={setShowModal} />}
    </>
  );
};

export default PanelProductAdd;
