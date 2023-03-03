import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./routes/MainPage";
import ErrorPage from "./error-page";
import PanelLogIn from "./components/panel/PanelLogIn";
import Index from "./components/subCategories/Index";
import Panel from "./routes/Panel";
import PanelProduct from "./components/panel/panelProduct/PanelProduct";
import PanelQuantity from "./components/panel/panelQuantitiy/PanelQuantity";
import PanelOrders from "./components/panel/panelOrder/PanelOrders";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "products/labaniat",
    element: <Index />,
    errorElement: <ErrorPage />
  },
  {
    path: "/admin",
    element: <PanelLogIn />,
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
  {
    path: "/panel",
    element: <Panel />,
    errorElement: <ErrorPage />
  },
  {
    path: "/panel/products",
    element: <PanelProduct />,
    errorElement: <ErrorPage />
  },
  {
    path: "/panel/quantity",
    element: <PanelQuantity />,
    errorElement: <ErrorPage />
  },
  {
    path: "/panel/orders",
    element: <PanelOrders />,
    errorElement: <ErrorPage />
  }
]);
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
