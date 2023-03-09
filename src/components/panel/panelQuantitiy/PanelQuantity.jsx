import React from "react";
import PanelHeader from "../../../layouts/PanelHeader";

import PanelQuantityTable from "./PanelQuantityTable";
const PanelQuantity = () => {
  return (
    <div className="panel-bg ">
      <PanelHeader />
      <div className="text-gray-500 py-3 h-screen">
        <h2> Product's Quantity</h2>
        <PanelQuantityTable />
      </div>
    </div>
  );
};

export default PanelQuantity;
