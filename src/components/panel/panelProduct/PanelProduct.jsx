import React from "react";
import PanelHeader from "../../../layouts/PanelHeader";
import PanelProductTable from "./PanelProductTable";

const PanelProduct = () => {
  return (
    <div className="panel-bg">
      <PanelHeader />
      <div className="text-gray-500 py-3">
        <h2> Products List</h2>
        <PanelProductTable />
      </div>
    </div>
  );
};

export default PanelProduct;
