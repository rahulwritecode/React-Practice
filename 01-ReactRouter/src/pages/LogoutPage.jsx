import React from "react";
import { useNavigate } from "react-router-dom";

function logoutPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };
  return (
    <>
      <div className="container py-5 ">
        <h1 className="text-center">Logout After Completing Work !</h1>

        <div className="btn-wrap d-flex justify-content-center">
          <button className="mt-3" onClick={handleLogout}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default logoutPage;
