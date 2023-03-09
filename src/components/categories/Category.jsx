import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../sample_front/configs/variables.config";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/subcategory`)

      .then((res) => setSubCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/category`)

      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  const subCategories = () => {
    return subCategory.map((category) => {
      return (
        <li key={category.id}>
          <Link to={`/products/${category.name}`} className="link">
            {category.name}
          </Link>
        </li>
      );
    });
  };
  const categories = () => {
    return category.map((category) => {
      return (
        <div key={category.id} className="mx-10">
          <Link to={`/subcategory/${category.id}`} className="link">
            <h1>{category.name}</h1>
          </Link>
          <div>
            <ul className="ul">{subCategories()}</ul>
          </div>
        </div>
      );
    });
  };
  return <div className="flex"> {categories()}</div>;
};

export default Category;
