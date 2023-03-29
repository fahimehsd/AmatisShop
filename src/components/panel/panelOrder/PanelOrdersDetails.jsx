import React, { useState } from "react";
import OrderDetailsForm from "../../forms/OrderDetailsForm";

const PanelOrdersDetails = ({ order }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Details</button>
      {showModal && (
        <OrderDetailsForm order={order} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default PanelOrdersDetails;
