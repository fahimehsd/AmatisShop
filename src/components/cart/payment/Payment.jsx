import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { instance } from "../../../api";

export default function Payment() {
  let cart = localStorage.getItem("cartInfo");
  cart = JSON.parse(cart);
  let order = localStorage.getItem("orderInfo");
  order = JSON.parse(order);
  const [id, setId] = useState();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const paymentHandler = async () => {
    const newOrder = await instance
      .post("/orders", order)
      .then((res) => res.data);
    navigate(`/payment/success/${newOrder.id}`);
  };

  return (
    <div className="flex justify-around p-10 items-center bg h-screen">
      <div>
        <form onSubmit={handleSubmit()}>
          <label htmlFor="card">Credit Card Number</label>
          <input
            className=" outline-fuchsia-900 border-[1px] border-fuchsia-900"
            type="text"
            placeholder="xxxx xxxx xxxx xxxx"
            {...register("creditCard", {
              required: true
            })}
          />
          <label htmlFor="holder">Card Holder</label>
          <input
            className=" outline-fuchsia-900 border-[1px] border-fuchsia-900"
            type="text"
            placeholder="John Smith"
            {...register("cardHolder", { required: true })}
          />
          <div className="flex justify-between">
            <div>
              <label htmlFor="month">Expiry Month</label>
              <input
                className=" outline-fuchsia-900 border-[1px] border-fuchsia-900"
                type="number"
                placeholder="02"
                {...register("expiryMonth", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="year">Expiry Year</label>
              <input
                className=" outline-fuchsia-900 border-[1px] border-fuchsia-900"
                type="number"
                placeholder="2022"
                {...register("expiryYear", { required: true, max: 3, min: 2 })}
              />
            </div>
          </div>
          <button
            onClick={paymentHandler}
            type="submit"
            className="w-full p-3 mt-5 bg border-[1px] rounded-md border-fuchsia-900 hover:bg-fuchsia-900 hover:text-white"
          >
            Pay
          </button>
          <button
            onClick={() => navigate(`/payment/failure`)}
            className=" float-right p-2 py-3 mt-2 bg border-[1px] rounded-md border-red-900 hover:bg-red-900 hover:text-white"
          >
            Cancel
          </button>
        </form>
      </div>
      <div className="bg border-[1px] border-fuchsia-900 p-4 w-[25rem] h-[30rem]">
        <div className="border-b border-fuchsia-900">
          <h1 className=" text-center my-4">{cart.cartItems} items</h1>
          <div className="flex justify-between">
            <p className="text-gray-500">Subtotal</p>
            <p>${cart.total}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Discount</p>
            <p> - $0(0%)</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-500">Delivery Service</p>
            <p> + $0</p>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <h5>Total</h5>
          <h4>${cart.total}</h4>
        </div>
      </div>
    </div>
  );
}
