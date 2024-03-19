import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="404-error-wrap py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center    ">
              <div className="404-wrap">
                <h1 className="text-center fs-1 fileError-head">404</h1>
                <p className="text-center fileError-text">File Not Found</p>

                <Link to="" className="anchorBtn mt-3">
                  Return To Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
