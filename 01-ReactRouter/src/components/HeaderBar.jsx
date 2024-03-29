import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function HeaderBar() {
  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log("local storage = ", login);
  }, []);

  return (
    <>
      <div className="header-wrapper py-3 bg-dark">
        <div className="container">
          <nav>
            <ul className="d-flex justify-content-center">
              <li className="list-style-none my-3 mx-4">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `${isActive ? "navActive" : "navUnactive"}  `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="list-style-none my-3 mx-4">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "navActive" : "navUnactive"}  `
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="list-style-none my-3 fw-semibold mx-4">
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `${isActive ? "navActive" : "navUnactive"}  `
                  }
                >
                  Service
                </NavLink>
              </li>
              <li className="list-style-none my-3 mx-4">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? "navActive" : "navUnactive"}  `
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="list-style-none my-3 mx-4">
                <NavLink
                  to="/search"
                  className={({ isActive }) =>
                    `${isActive ? "navActive" : "navUnactive"}  `
                  }
                >
                  Search
                </NavLink>
              </li>

              {localStorage.getItem("login") ? (
                <li className="list-style-none my-3 mx-4">
                  <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                      `${isActive ? "navActive" : "navUnactive"}  `
                    }
                  >
                    Logout
                  </NavLink>
                </li>
              ) : (
                <li className="list-style-none my-3 mx-4">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `${isActive ? "navActive" : "navUnactive"}  `
                    }
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
