import React, { useState } from "react";

function ApiPostMethod() {
  const [name, setName] = useState();
  const [salary, setSalary] = useState();
  const [age, setAge] = useState();

  const [error, setError] = useState("");

  const handlePostMethod = (e) => {
    e.preventDefault();
    console.log(name, salary, age);
    let data = { name, salary, age };

    try {
      fetch("	https://dummy.restapiexample.com/api/v1/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => console.log("Result", res));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="container mt-2 pb-5">
        <h1>Post API Method</h1>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter you name"
          />{" "}
          <br />
          <br />
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter you salary"
          />
          <br />
          <br />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter you age"
          />{" "}
          <br />
          <br />
          <button type="button" onClick={handlePostMethod}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ApiPostMethod;
