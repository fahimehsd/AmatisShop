import React from "react";
import PanelHeader from "../../../layouts/PanelHeader";
import PanelProductAdd from "./PanelProductAdd";
import PanelProductTable from "./PanelProductTable";

const PanelProduct = () => {
  return (
    <div className=" bg-gray-100 grid grid-cols-5">
      <PanelHeader />
      <div className="  text-gray-500 h-screen m-3 grid  grid-col-3 rounded-md p-5 col-span-4 bg-pink-50 border-[1px] border-fuchsia-900">
        <div className="flex items-center justify-between sticky">
          <h2>Products List</h2>
          <PanelProductAdd />
        </div>
        <PanelProductTable />
      </div>
    </div>
  );
};

export default PanelProduct;
