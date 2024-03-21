import React from "react";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="py-5">
        <h1 className="text-center">Contact Page </h1>
        <p className="text-center fs-5">
          useNavigate() Hook = Navigate Page on button click
        </p>

        <div className="mt-5 d-flex justify-content-center">
          <div className="btn-wrap mx-3">
            <button className="anchorBtn " onClick={() => navigate("/")}>
              Navigate to Home
            </button>
          </div>
          <div className="btn-wrap mx-3">
            <button className="anchorBtn " onClick={() => navigate("/service")}>
              Navigate to Service
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
