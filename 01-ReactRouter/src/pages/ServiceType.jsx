import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

function ServiceType() {
  const { serviceName } = useParams();

  // url = http://localhost:5173/service/website-development?name=web#header

  const location = useLocation();

  console.log(location);

  return (
    <>
      <div className="type-wrap py-5">
        <h1 className="text-center"> Selected Service is {serviceName} </h1>

        <p className="container mt-5 fs-5">
          check with this url example to know value of useLocation() hook.{" "}
          <br /> url =
          http://localhost:5173/service/website-development?name=web#header
        </p>

        <p className="mt-3 container fs-5">
          useLocation() Properties are hash, search, state, pathName and state{" "}
          <br />
          1] pathName = url path traverse <br /> 2] hash = unique section id to
          traverse to direct that section of web page search = search params are
          the special " ?searchParameter " <br /> 3] key = unique key of
          location object <br />
          4] state = data value which need to shared across pages.
        </p>

        <div className="abtn d-flex justify-content-center">
          <Link to="/service" className="anchorBtn mt-3">
            Return To Service page
          </Link>
        </div>
      </div>
    </>
  );
}

export default ServiceType;
