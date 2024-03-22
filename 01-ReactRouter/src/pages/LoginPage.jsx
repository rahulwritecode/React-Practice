import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <>
      <div className="container py-5 ">
        <h1 className="text-center">
          Kindly Please login to get Page Access !
        </h1>

        {/* <div className="btn-wrap d-flex justify-content-center">
          {localStorage.getItem("login") ? (
            <button className="mt-3" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="mt-3" onClick={handleLogin}>
              Login
            </button>
          )}
        </div> */}

        <div className="btn-wrap d-flex justify-content-center">
          <button className="mt-3" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
