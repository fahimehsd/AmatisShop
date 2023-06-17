import React from "react";
import PanelHeader from "../../../layouts/PanelHeader";
import PanelOrdersTable from "./PanelOrdersTable";
const PanelOrders = () => {
  return (
    <div className="bg-gray-100 grid grid-cols-5">
      <PanelHeader />
      <div className=" text-gray-500  h-screen m-3 grid  grid-col-3 rounded-md p-5 col-span-4  bg-pink-50 border-[1px] border-fuchsia-900">
        <h2> Order's Management</h2>
        <PanelOrdersTable />
      </div>
    </div>
  );
};

export default PanelOrders;
