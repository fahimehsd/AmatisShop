import React from "react";
import { Outlet } from "react-router-dom";

import Section from "../components";
import Categories from "../components/categories/Categories";
import Header from "../layouts/Header";
import HomePageFooter from "../layouts/HomePageFooter";

const MainPage = () => {
  return (
    <>
      <div className="home-bg h-full">
        <Header />
        <Section />
      </div>
      <main>
        <Categories />
      </main>
      <footer>
        <HomePageFooter />
      </footer>

      <Outlet />
    </>
  );
};

export default MainPage;
