import React from "react";
import { Link } from "react-router-dom";

function ServicePage() {
  return (
    <>
      <div className="py-5">
        <h1 className="text-center">Service Page</h1>
        <div className="service-wrap mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3 className="text-center">
                  <Link to="/service/website-development">
                    Website Development
                  </Link>
                </h3>
              </div>
              <div className="col-md-4">
                <h3 className="text-center">
                  <Link to="/service/Android-App-development">
                    Android App Development
                  </Link>
                </h3>
              </div>
              <div className="col-md-4">
                <h3 className="text-center ">
                  <Link to="/service/IOS-app-development">
                    IOS App Development
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicePage;
