import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  return (
    <div className="p-4">
      <Link to={`/products/labaniat`}>
        <h1>لبنیات</h1>
      </Link>
      <div className="grid grid-cols-3 gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
