import React from "react";

const Section = () => {
  return (
    <section className="flex items-center justify-around">
      <div className=" w-[25rem] mt-9 mx-32">
        <img
          src={require("../assets/perfume.png")}
          className="image1"
          alt="pic"
        />
      </div>
      <div className="flex flex-col justify-start items-center text-gray-600">
        <h1 className=" text-fuchsia-900 font-semibold">Amatis Shop</h1>
        <h4> You are never fully dressed without perfume </h4>
        <h4>
          Perfume is like a new dress, it makes you quite simply marvellous
        </h4>
      </div>
    </section>
  );
};

export default Section;
