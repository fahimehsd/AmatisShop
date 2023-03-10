import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./routes/MainPage";
import ErrorPage from "./error-page";
import PanelLogIn from "./components/panel/PanelLogIn";
import Index from "./components/subCategories/Index";
import Panel from "./routes/Panel";
import PanelProduct from "./components/panel/panelProduct/PanelProduct";
import PanelQuantity from "./components/panel/panelQuantitiy/PanelQuantity";
import PanelOrders from "./components/panel/panelOrder/PanelOrders";
import store from "./app/store";
import SubCategoriesIndex from "./components/subCategories/Index";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Landing />,
  //   errorElement: <ErrorPage />
  // },
  { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
  {
    path: "products/:productId",
    element: <SubCategoriesIndex />,
    errorElement: <ErrorPage />
  },
  {
    path: "brands/:brandsId",
    element: <SubCategoriesIndex />,
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
  <Provider store={store}>
    <RouterProvider router={router}>
      <Auth0Provider
        domain="dev-mf6lqfng.us.auth0.com"
        clientId="5c1HQIOd6HlVEi2CLLfTPO7HCImJ9qZr"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </RouterProvider>
  </Provider>
);
