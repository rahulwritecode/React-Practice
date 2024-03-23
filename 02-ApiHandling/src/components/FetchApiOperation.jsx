import React, { useEffect, useState } from "react";
import axios from "./AxiosLink";

const API_LINK = "https://jsonplaceholder.typicode.com";

function FetchApiOperation() {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState("");

  const apiCall1 = async (url) => {
    try {
      const apiResponse = await fetch(url);
      const jsonResp = await apiResponse.json();
      setApiData(jsonResp);
    } catch (error) {
      setError(error.message);
    }
  };

  const apiCall2 = async () => {
    try {
      //   Fetch from axois external base url define link
      const apiResp = await axios.get("/posts");
      setApiData(apiResp.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    apiCall1(`${API_LINK}/posts`);

    apiCall2();
  }, []);

  return (
    <>
      <div className="mt-3 container">
        <h2 className="my-3">Api Posts Data Fetch Successully !</h2>
        <ul>
          {apiData.map((item, index) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FetchApiOperation;
