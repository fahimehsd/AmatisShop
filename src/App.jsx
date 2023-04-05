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
import AllProducts from "./components/subCategories/AllProducts";
import ProductInfo from "./components/productInfo/ProductInfo";
import BrandsCategory from "./components/categories/brands/BrandsCategory";
import BrandsProducts from "./components/categories/brands/BrandsProducts";
import EachBrandsProducts from "./components/categories/brands/EachBrandsProducts";
import Basket from "./components/cart/Basket";
import CheckOut from "./components/cart/CheckOut";
import Payment from "./components/cart/payment/Payment";
import PaymentResultFail from "./components/cart/payment/PaymentResultFail";
import PaymentResultSuccess from "./components/cart/payment/PaymentResultSuccess";

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
            <BrandsProducts />
          </Suspense>
        }
      />
      <Route
        path="/brands/:brandsName"
        element={
          <Suspense fallback={<Loading />}>
            <EachBrandsProducts />
          </Suspense>
        }
      />
      <Route
        path="/category/:categoryName"
        element={
          <Suspense fallback={<Loading />}>
            <AllProducts />
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
      <Route
        path="/products/:name"
        element={
          <Suspense fallback={<Loading />}>
            <ProductInfo />
          </Suspense>
        }
      />
      <Route
        path="/products/:categoryName/:name"
        element={
          <Suspense fallback={<Loading />}>
            <ProductInfo />
          </Suspense>
        }
      />
      <Route
        path="/basket"
        element={
          <Suspense fallback={<Loading />}>
            <Basket />
          </Suspense>
        }
      />
      <Route
        path="/checkout"
        element={
          <Suspense fallback={<Loading />}>
            <CheckOut />
          </Suspense>
        }
      />
      <Route
        path="/payment"
        element={
          <Suspense fallback={<Loading />}>
            <Payment />
          </Suspense>
        }
      />
      <Route
        path="/payment/failure"
        element={
          <Suspense fallback={<Loading />}>
            <PaymentResultFail />
          </Suspense>
        }
      />
      <Route
        path="/payment/success/:orderId"
        element={
          <Suspense fallback={<Loading />}>
            <PaymentResultSuccess />
          </Suspense>
        }
      />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
