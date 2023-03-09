import React from "react";
import PanelHeader from "../../../layouts/PanelHeader";
import PanelOrdersTable from "./PanelOrdersTable";
const PanelOrders = () => {
  return (
    <div className="panel-bg">
      <PanelHeader />
      <div className="text-gray-500 py-3 h-[100vh]">
        <h2> Order's Management</h2>
        <PanelOrdersTable />
      </div>
    </div>
  );
};

export default PanelOrders;
