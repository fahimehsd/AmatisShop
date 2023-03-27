import React from "react";
import BrandsCategory from "./BrandsCategory";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 mx-auto h-screen">
      <BrandsCategory />
      <Category />
    </div>
  );
};

export default Categories;
