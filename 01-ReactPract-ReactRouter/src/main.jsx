import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="service" element={<ServicePage />} />
      <Route path="contact" element={<ContactPage />} />

      {/* redirect link to set path in navigate */}
      {/* <Route path="/*" element={<Navigate to="/" />} /> */}

      {/* redirect link to 404 page not found page */}
      <Route path="/*" element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
