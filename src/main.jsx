import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "../src/Root";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthProvider from "./Provider/AuthProvider";
import Orders from "./components/Orders";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/orders',
        element: <PrivateRouter> <Orders></Orders></PrivateRouter>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
