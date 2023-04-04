import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { baseURL, instance } from "../../api";
import {
  cartTotalPriceSelector,
  cartTotalSelector
} from "../../app/slices/cart/selectors";
import CheckoutHeader from "../../layouts/CheckoutHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";

export default function CheckOut() {
  const { state } = useLocation();
  const total = useSelector(cartTotalPriceSelector);
  const cartItems = useSelector(cartTotalSelector);
  const { register, handleSubmit } = useForm();
  const items = state.items;
  const orders = async (items) => {
    const order = items.map((item) => {
      return {
        id: item.id,
        name: item.name,
        count: item.quantity,
        price: item.price,
        image: item.thumbnail
      };
    });
    return order;
  };
  const onSubmit = async (data) => {
    let order = await orders(items);

    const newOrder = {
      username: data.fname,
      lastname: data.lname,
      address: data.address,
      phone: data.phone,
      expectAt: data.expectAt,
      products: order,
      prices: total,
      delivered: "false",
      createdAt: new Date()
    };
    instance.post("/orders", newOrder).then((res) => console.log(res.data));
  };

  return (
    <div className="flex p-3 text-gray-500">
      <div>
        <CheckoutHeader total={total} cartItems={cartItems} />
        <div className="mt-10 px-16">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="mb-5">How would you like to get your order?</h3>
            <div className="flex mb-4">
              <div className="mr-10">
                <label htmlFor="fname">First name</label>
                <input
                  type="text"
                  {...register("fname", { required: true, maxLength: 80 })}
                />
              </div>
              <div>
                <label htmlFor="lname">Last name</label>
                <input
                  type="text"
                  {...register("lname", { required: true, maxLength: 100 })}
                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="tel">Phone number</label>
              <input
                type="tel"
                {...register("phone", {
                  required: true,
                  minLength: 6,
                  maxLength: 12
                })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address">Address</label>
              <input type="text" {...register("address", { required: true })} />
            </div>
            <div className="mb-2">
              <label htmlFor="expect">Expect At</label>
              <input
                type="date"
                {...register("expectAt", { required: true })}
              />
            </div>
            <input className="bg border-0 mt-3 p-3" type="submit" />
          </form>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {items.map((item) => {
            return (
              <div
                class="relative float-left -mr-[100%] w-[30rem] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                data-te-carousel-active
              >
                <img
                  src={`${baseURL}/files/${item.thumbnail}`}
                  className="block w-[30rem]"
                  alt={item.name}
                />
              </div>
            );
          })}
        </div>
        <button
          className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
}
