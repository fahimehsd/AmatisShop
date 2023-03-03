import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../components/categories/Categories";
import Header from "../layouts/Header";

const MainPage = () => {
  return (
    <div className="bg-cover bg-center bg-violet-900 bg-gradient-to-b from-violet-900 via-purple-500 to-pink-500 ">
      <div className="bg-opacity-20 ">
        <img
          className="relative z-10"
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_518504426_2000196920009280941_319976.jpg"
          alt=""
        />
      </div>
      <div className="absolute">
        <Header />
        <Categories />
      </div>
      <Outlet />
    </div>
  );
};

export default MainPage;
