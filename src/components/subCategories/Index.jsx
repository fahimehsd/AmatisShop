import React from "react";
import Header from "../../layouts/Header";
import SubCategories from "./SubCategories";
import SubCategoriesProducts from "./SubCategoriesProducts";

const SubCategoriesIndex = () => {
  return (
    <div className="home-bg">
      <Header />
      <main className="grid grid-cols-5">
        <div>
          <SubCategories />
        </div>
        <div>
          <SubCategoriesProducts />
        </div>
      </main>
    </div>
  );
};

export default SubCategoriesIndex;
