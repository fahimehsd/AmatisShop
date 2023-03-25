import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../api";
import women from "../../assets/girl.jpg";
import men from "../../assets/m1.jpg";
const Category = () => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    instance
      .get(`/subcategory`)
      .then((res) => setSubCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    instance
      .get(`/category`)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  const categories = () => {
    return category.map((category) => {
      return (
        <>
          {category.name === "WOMEN" ? (
            <div
              key={category.id}
              className="bg-accent-dark bg-cover mx-10 flex flex-col items-center border-[1px] border-blue-900 p-3 w-[400px] h-[400px] shadow-md"
              style={{
                backgroundImage: `url(${women})`
              }}
            >
              <Link
                to={`/category/${category.name}`}
                className="link text-blue-900 mt-[2rem] mr-[12rem] "
              >
                <h1>{category.name}</h1>
              </Link>
              {/* <div>
          <ul className="ul text-center">{subCategories(category)}</ul>
        </div> */}
            </div>
          ) : (
            <div
              key={category.id}
              className="bg-accent-dark bg-cover mx-10 flex flex-col items-center border-[1px] border-cyan-800 p-3 w-[400px] h-[400px] shadow-md"
              style={{
                backgroundImage: `url(${men})`
              }}
            >
              <Link
                to={`/category/${category.name}`}
                className="link text-cyan-600 mt-[17rem] mr-[15.5rem] "
              >
                <h1>{category.name}</h1>
              </Link>
              {/* <div>
      <ul className="ul text-center">{subCategories(category)}</ul>
    </div> */}
            </div>
          )}
        </>
      );
    });
  };

  const subCategories = (category) => {
    return subCategory.map((subcategory) => {
      return (
        <li key={subcategory.id}>
          <Link
            to={`/category/${category.name.toLowerCase()}/${subcategory.name}`}
            className="link text-fuchsia-600 text-lg"
          >
            {subcategory.name}
          </Link>
        </li>
      );
    });
  };
  return <div className="flex"> {categories()}</div>;
};

export default Category;
