import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlReq } from "../../utils/api.util";
import brandBg from "../../assets/bg.jpg";
const BrandsCategory = () => {
  const [subCategory, setSubCategory] = useState([]);
  useEffect(() => {
    urlReq("products")
      .then((res) => setSubCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  const newArray = [];
  subCategory.forEach((obj) => {
    if (!newArray.some((o) => o.brand === obj.brand)) {
      newArray.push({ ...obj });
    }
  });

  const subCategories = () => {
    return newArray.map((category) => {
      return (
        <li key={category.id}>
          <Link
            to={`/brands/${category.brand}`}
            className="link text-fuchsia-600 text-lg"
          >
            {category.brand}
          </Link>
        </li>
      );
    });
  };
  return (
    <div
      className="bg-accent-dark bg-cover  mx-10 flex flex-col items-center border-[1px] border-fuchsia-900 p-3 w-[400px] h-[400px] shadow-md"
      style={{
        backgroundImage: `url(${brandBg})`
      }}
    >
      <Link
        to={"/brands"}
        className="link text-fuchsia-900 mt-[8rem] ml-[12rem] "
      >
        <h1>BRANDS</h1>
      </Link>
      {/* <div>
        <ul className="ul text-center">{subCategories()}</ul>
      </div> */}
    </div>
  );
};

export default BrandsCategory;
