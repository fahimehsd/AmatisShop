import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../api";
import SubcategoryHeader from "../../layouts/SubcategoryHeader";
import SubCategoriesProducts from "./SubCategoriesProducts";

const AllProducts = () => {
  const { categoryName } = useParams();
  console.log(categoryName);
  return (
    <div>
      <SubcategoryHeader />
      <SubCategoriesProducts categoryName={categoryName} />
    </div>
  );
};

export default AllProducts;
