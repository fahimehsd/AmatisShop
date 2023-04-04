import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SubcategoryHeader from "../../layouts/SubcategoryHeader";
import HomePageFooter from "../../layouts/HomePageFooter";
import { baseURL } from "../../api/constants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/slices/cart/cartSlice";

const ProductInfo = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { from } = location.state;
  const images = from.image;

  return (
    <>
      <SubcategoryHeader />
      <div className="text-gray-500 mx-40 mt-2">
        {`Fragrance > ${from.category.toLowerCase()} > ${from.subcategory}`}
      </div>
      <div className="flex flex-col px-5">
        <div className="flex items-center justify-center border-b border-[#4d106364] mb-5 ">
          <div className="w-1/3">
            <Swiper
              effect={"fade"}
              grabCursor={true}
              pagination={{
                clickable: true
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              {images.map((image) => {
                return (
                  <SwiperSlide>
                    <div className=" bg-white">
                      <img
                        src={`${baseURL}/files/${image}`}
                        alt="pic"
                        className="w-[30rem] p-4 mb-5 rounded-lg mx-auto"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="text-gray-700 mr-48 p-4 ">
            <Link to={`/brands/${from.brand}`} className="link text-gray-700">
              <p className="font-bold text-lg">{from.brand}</p>
            </Link>
            <h4>{from.name}</h4>
            <h6 className="font-bold">${from.price}</h6>
            <p>{from.quantity} in stock</p>
            <button
              onClick={() => dispatch(addToCart(from))}
              className="border bg-pro p-3 rounded-full w-full mt-4 shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-[#4d106364] hover:text-white duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="mb-10">
          <p className="font-bold text-lg">About this product</p>
          <p>{from.description}</p>
        </div>
      </div>
      <HomePageFooter />
    </>
  );
};

export default ProductInfo;
