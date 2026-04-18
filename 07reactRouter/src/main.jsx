import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./Components/Home";
import AboutUs from "./AboutUs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
);
