import React, { useEffect, useState } from "react";
import axios from "axios";

function HandleApiCall() {
  const BASE_URL = "https://jsonplaceholder.typicode.com/users";
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState("");

  let apiCall = async () => {
    try {
      // Normal Fetch API type
      // const apiResponse = await fetch(BASE_URL);
      // const jsonData = await apiResponse.json();
      // console.log(jsonData);
      // setApiData(jsonData);

      // Axios API Reqest
      // axios.get(BASE_URL).then((response) => setApiData(response.data));

      const respAxiosData = await axios.get(BASE_URL);
      setApiData(respAxiosData.data);

      // axios
      //   .get(BASE_URL)
      //   .then((response) => console.log("axios response = ", response));
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      //   setError("");
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <div className="pt-5 py-3">
        <h1 className="text-center">Direct Link Fetch Api Handling</h1>
      </div>
      <div className="container"></div>

      <div className="container ">
        {error ? (
          <>
            <h2 className="my-3">{error}</h2>
          </>
        ) : (
          <>
            <h2 className="my-3">Api Data Fetch Successully !</h2>
            <table className="">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
              </tr>
              {apiData.map((val) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.address.city}</td>
                </tr>
              ))}
            </table>
          </>
        )}
      </div>

      {/* <div className="container mb-5">
        <ul>
          {apiData.map((item, index) => {
            const { id, name, email } = item;
            return <li key={id}> {name} </li>;
          })}
        </ul>
      </div> */}
    </>
  );
}

export default HandleApiCall;
