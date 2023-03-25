import React from "react";
import { useParams } from "react-router-dom";

const SubCategories = () => {
  const { categoryName, subcategoryName } = useParams();

  return <div>SubCategories</div>;
};

export default SubCategories;
