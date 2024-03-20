import React from "react";
import { useParams, Link } from "react-router-dom";

function ServiceType() {
  const { serviceName } = useParams();

  return (
    <>
      <div className="type-wrap py-5">
        <h1 className="text-center"> Selected Service is {serviceName} </h1>

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
