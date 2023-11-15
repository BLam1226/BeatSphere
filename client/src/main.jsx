import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, BrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Countrypage from "./pages/Countrypage.jsx";
import Player from "./pages/Player.jsx";
import Profile from "./pages/Profile.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Globe from "./pages/Globepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      }, {
        path: "/Login",
        element: <Login />
      }, {
        path: "/Signup",
        element: <Signup />
      }, {
        path: "/Countrypage",
        element: <Countrypage />
      }, {
        path: "/Globepage",
        element: <Globe />
      }, {
        path: "/Player",
        element: <Player />
      }, {
        path: "/me",
        element: <Profile />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
