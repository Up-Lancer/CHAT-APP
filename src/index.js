import React from "react";
import ReactDOM from "react-dom/client";
import "./resources/css/all.min.css";
import "./resources/css/bootstrap.min.css";
import "./resources/js/bootstrap.bundle.min.js";
import './resources/js/script.js'
import App from "./pages/App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./layouts/PofilePage.js";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.js";
import Home from "./layouts/Home.js";
import Notification from "./layouts/Notification.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
