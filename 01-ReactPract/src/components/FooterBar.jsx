import React from "react";
import { Link } from "react-router-dom";

function FooterBar() {
  return (
    <footer>
      <div className="foot-wrap bg-dark py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3  d-flex justify-content-center">
              <div className="foot-link-wrap d-flex justify-content-center">
                <ul className="list-style-none">
                  <li className="mt-2">
                    <Link
                      to=""
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/about"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/service"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/contact"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="foot-link-wrap">
                <ul className="list-style-none">
                  <li className="mt-2">
                    <Link
                      to=""
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/about"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/service"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/contact"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="foot-link-wrap">
                <ul className="list-style-none">
                  <li className="mt-2">
                    <Link
                      to=""
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/about"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/service"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/contact"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="foot-link-wrap">
                <ul className="list-style-none">
                  <li className="mt-2">
                    <Link
                      to=""
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/about"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/service"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/contact"
                      className="text-decoration-none list-style-none text-white fs-5 fw-semibold"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
