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
import ServiceType from "./pages/ServiceType.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Protected from "./components/Protected.jsx";
import LogoutBtnPage from "./pages/LogoutBtnPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<Protected Component={AboutPage} />} />
      <Route path="service" element={<Protected Component={ServicePage} />} />
      <Route path="contact" element={<Protected Component={ContactPage} />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="logout" element={<LogoutBtnPage />} />

      {/* useParams hook */}
      <Route path="service/:serviceName" element={<ServiceType />} />

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
