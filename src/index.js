import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const router = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <Landing />,
//   //   errorElement: <ErrorPage />
//   // },
//   { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
//   {
//     path: "products/:productId",
//     element: <SubCategoriesIndex />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "brands/:brandsId",
//     element: <SubCategoriesIndex />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/admin",
//     element: <PanelLogIn />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/panel",
//     element: <Panel />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/panel/products",
//     element: <PanelProduct />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/panel/quantity",
//     element: <PanelQuantity />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/panel/orders",
//     element: <PanelOrders />,
//     errorElement: <ErrorPage />
//   }
// ]);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
