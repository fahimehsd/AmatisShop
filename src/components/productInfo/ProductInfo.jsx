import React from "react";
import { useLocation } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductInfo = () => {
  const location = useLocation();
  const { from } = location.state;
  const images = from.image;
  console.log(images);
  // const imagesSwiper = () => {
  //   for (let i = 0; i < images.length; i++) {
  //     return (
  //       <SwiperSlide>
  //         <img src={i} alt="pic" className="w-[20rem]" />
  //       </SwiperSlide>
  //     );
  //   }
  // };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper w-[50rem] "
      >
        {images.map((image) => {
          return (
            <SwiperSlide>
              <img src={image} alt="pic" className="w-[20rem] mr-0" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductInfo;
