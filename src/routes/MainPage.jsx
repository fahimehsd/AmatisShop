import React from "react";
import { Outlet } from "react-router-dom";
import Section from "../components";
import Categories from "../components/categories/Categories";
import Header from "../layouts/Header";

const MainPage = () => {
  return (
    <div className="home-bg">
      <Header />
      <main>
        <Section />
        <Categories />
      </main>

      <Outlet />
    </div>
  );
};

export default MainPage;
