import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { instance } from "../../api";
import Header from "../../layouts/Header";
import SubcategoryHeader from "../../layouts/SubcategoryHeader";
import SubCategories from "./SubCategories";

const SubCategoriesIndex = () => {
  const { categoryName, subcategoryName } = useParams();
  return (
    <div>
      <SubcategoryHeader />
      <div>
        <SubCategories
          categoryName={categoryName}
          subcategoryName={subcategoryName}
        />
      </div>
    </div>
  );
};

export default SubCategoriesIndex;
