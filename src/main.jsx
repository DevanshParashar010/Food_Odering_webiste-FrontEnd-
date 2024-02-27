import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Menu from "./Components/Menu.jsx";
import Contact from "./Components/Contact.jsx";

import Cart from "./Components/Cart.jsx";
import SingleProduct from "./Components/SingleProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/Menu",
        element: <Menu />,
      },
      { path: "/Menu/:itemId", element: <SingleProduct /> },
      { path: "/Contact", element: <Contact /> },

      { path: "/Cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
