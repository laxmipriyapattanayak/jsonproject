import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserInfo from "./components/UserInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Oops..an unexpected error has occured</p>,
  },
  {
    path: "/user-details/:id",
    element: <UserInfo />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
