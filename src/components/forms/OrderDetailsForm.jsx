import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { instance } from "../../api/constants";

const OrderDetailsForm = ({ order, setShowModal }) => {
  const [isChecked, setIsChecked] = useState(order.delivered === "true");
  const [PendingIsChecked, SetPendingIsChecked] = useState(
    order.delivered === "false"
  );

  //   order.delivered === "true" ? setIsChecked(true) : SetPendingIsChecked(true);
  const { register, handleSubmit } = useForm({});
  const handleOrder = () => {
    setIsChecked(!isChecked);
    SetPendingIsChecked(!PendingIsChecked);
  };
  const handleRegistration = async (data) => {
    const editedProduct = {
      delivered: data.delivered.toString()
    };
    instance.patch(`/orders/${order.id}`, editedProduct);

    setShowModal(false);
    window.location.reload();
  };
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setShowModal(false)}
        ></div>
        <div className="flex justify-center items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 ">
              <div className="mt-2 text-center ">
                <div className="border-b-2 p-2">
                  <h1 className=" font-medium text-fuchsia-900">
                    Order's Detail
                  </h1>
                </div>
                <div>
                  <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="mt-3">
                      <div className="flex justify-end mb-2">
                        <div className="flex items-center mr-4">
                          <input
                            id="inline-checkbox"
                            type="checkbox"
                            {...register("delivered")}
                            checked={isChecked}
                            onChange={handleOrder}
                            className="w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="inline-checkbox"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Delivered
                          </label>
                        </div>

                        <div className="flex items-center mr-4">
                          <input
                            id="inline-2-checkbox"
                            checked={PendingIsChecked}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="inline-2-checkbox"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Pending
                          </label>
                        </div>
                      </div>
                      <table className=" mx-auto">
                        <thead className="border-b-2 border-fuchsia-900">
                          <th className="p-3">Product ID</th>
                          <th className="p-3">Product</th>
                          <th className="p-3">Count</th>
                          <th className="p-3">Total Price</th>
                        </thead>
                        <tbody>
                          {order.products.map((product) => {
                            return (
                              <tr className="border-b">
                                <td className="p-3">{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.count}</td>
                                <td>{product.price}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-5">
                      <h3>User's Information</h3>
                      <div className="flex justify-between">
                        <div className="flex flex-col items-center">
                          <label htmlFor="name" className=" text-fuchsia-900">
                            User FirstName
                          </label>
                          <input
                            type="text"
                            name="name"
                            {...register("fname")}
                            value={order.username}
                            className=" border-t-0 border-fuchsia-900"
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <label htmlFor="name" className=" text-fuchsia-900">
                            User LastName
                          </label>
                          <input
                            type="text"
                            name="name"
                            {...register("lname")}
                            value={order.lastname}
                            className=" border-t-0 border-fuchsia-900"
                          />
                        </div>
                      </div>
                      <div className="mt-3">
                        <label htmlFor="address" className=" text-fuchsia-900">
                          User's Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          {...register("address")}
                          value={order.address}
                          className=" border-t-0 border-fuchsia-900"
                        />
                      </div>
                      <div className="mt-3">
                        <label htmlFor="phone" className=" text-fuchsia-900">
                          User's Phone Number
                        </label>
                        <input
                          type="number"
                          name="phone"
                          {...register("phone")}
                          value={order.phone}
                          className=" border-t-0 border-fuchsia-900"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className=" bg-fuchsia-900 w-full rounded-md p-2 text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsForm;
