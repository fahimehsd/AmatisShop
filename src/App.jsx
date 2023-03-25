import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import React, { Suspense, lazy, useEffect } from "react";
import "./index.css";
import Loading from "./loading/Loading";
import ErrorPage from "./error-page";

import PanelLogIn from "./components/panel/PanelLogIn";
import Panel from "./routes/Panel";
import PanelProduct from "./components/panel/panelProduct/PanelProduct";
import PanelQuantity from "./components/panel/panelQuantitiy/PanelQuantity";
import PanelOrders from "./components/panel/panelOrder/PanelOrders";
import SubCategoriesIndex from "./components/subCategories/Index";
const MainPage = lazy(() => import("./routes/MainPage"));

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/auth" && localStorage.getItem("token")) {
      navigate("/panel");
    }
  }, [pathname]);

  return (
    <Routes>
      {/* {localStorage.getItem("token") ? (
        <>
          <Route
            path="/dash"
            element={
              <Suspense fallback={<Loading />}>
                <DashboardScreen />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loading />}>
                <ProfileScreen />
              </Suspense>
            }
          />
        </>
      ) : null} */}
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        path="/auth"
        element={
          <Suspense fallback={<Loading />}>
            <PanelLogIn />
          </Suspense>
        }
      />
      <Route
        path="/panel"
        element={
          <Suspense fallback={<Loading />}>
            <Panel />
          </Suspense>
        }
      />
      <Route
        path="/panel/products"
        element={
          <Suspense fallback={<Loading />}>
            <PanelProduct />
          </Suspense>
        }
      />
      <Route
        path="/panel/quantity"
        element={
          <Suspense fallback={<Loading />}>
            <PanelQuantity />
          </Suspense>
        }
      />
      <Route
        path="/panel/orders"
        element={
          <Suspense fallback={<Loading />}>
            <PanelOrders />
          </Suspense>
        }
      />
      <Route
        path="/brands"
        element={
          <Suspense fallback={<Loading />}>
            <SubCategoriesIndex />
          </Suspense>
        }
      />
      <Route
        path="/brands/:brandsName"
        element={
          <Suspense fallback={<Loading />}>
            <SubCategoriesIndex />
          </Suspense>
        }
      />
      <Route
        path="/category"
        element={
          <Suspense fallback={<Loading />}>
            <SubCategoriesIndex />
          </Suspense>
        }
      />
      <Route
        path="/category/:categoryName"
        element={
          <Suspense fallback={<Loading />}>
            <SubCategoriesIndex />
          </Suspense>
        }
      />
      <Route
        path="/category/:categoryName/:subcategoryName"
        element={
          <Suspense fallback={<Loading />}>
            <SubCategoriesIndex />
          </Suspense>
        }
      />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
