import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    let loginData = localStorage.getItem("login");
    if (!loginData) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Component />
    </>
  );
}

export default Protected;
