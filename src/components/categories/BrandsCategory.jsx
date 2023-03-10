import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../sample_front/configs/variables.config";

const BrandsCategory = () => {
  const [subCategory, setSubCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/products`)

      .then((res) => setSubCategory(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(subCategory);
  const subCategories = () => {
    return subCategory.map((category) => {
      return (
        <li key={category.id}>
          <Link
            to={`/brands/${category.id}`}
            className="link text-fuchsia-600 "
          >
            {category.brand}
          </Link>
        </li>
      );
    });
  };
  return (
    <div className="mx-10">
      <Link to={"/brands"} className="link text-fuchsia-900">
        <h1>BRANDS</h1>
      </Link>
      <div>
        <ul className="ul">{subCategories()}</ul>
      </div>
    </div>
  );
};

export default BrandsCategory;
