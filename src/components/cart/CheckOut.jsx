import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
import AwesomeSlider from "react-awesome-slider";

export default function CheckOut() {
  const { state } = useLocation();
  const total = useSelector(cartTotalPriceSelector);
  const cartItems = useSelector((state) => state.cart);
  const { register, handleSubmit } = useForm();
  const items = state.items;
  const cart = {
    total,
    cartItems
  };
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
    localStorage.setItem("orderInfo", JSON.stringify(newOrder));
    localStorage.setItem("cartInfo", JSON.stringify(cart));
    // instance.post("/orders", newOrder).then((res) => console.log(res.data));
    window.location.href = "/payment";
  };

  return (
    <div className="flex p-3 text-gray-500">
      <div>
        <CheckoutHeader total={total} cartItems={cartItems.length} />
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
            <input className="bg  border-fuchsia-900 mt-3 p-3" type="submit" />
          </form>
        </div>
      </div>
      <div className="mx-auto w-[45rem] border-[1px] border-fuchsia-900">
        <AwesomeSlider className="w-[40rem] mx-auto">
          {items.map((item) => {
            return <div data-src={`${baseURL}/files/${item.thumbnail}`} />;
          })}
        </AwesomeSlider>
      </div>
    </div>
  );
}
