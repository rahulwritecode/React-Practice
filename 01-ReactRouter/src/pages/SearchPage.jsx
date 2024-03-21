import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams({
    name: "",
    department: "",
  });

  const searchName = searchParams.get("name");
  const searchDept = searchParams.get("department");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchParams((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const searchHandle = (e) => {
    e.preventDefault();
    console.log(searchParams, searchParams.name, searchParams.department);
  };

  return (
    <>
      <div className="search-wrap py-5">
        <div className="container">
          <div className="row justify-content-center">
            <form
              onSubmit={handleSubmit}
              className="d-flex justify-content-center align-items-center fs-4"
            >
              <input
                type="text"
                className="p-3 mx-3"
                name="name"
                placeholder="Search By Name"
                onChange={handleChange}
              />

              <input
                type="text"
                className="p-3 mx-3"
                name="department"
                placeholder="Search By Department"
                onChange={handleChange}
              />

              <div className=" btn-wrap mx-3">
                <button className="anchorBtn " onClick={searchHandle}>
                  Search
                </button>
              </div>
            </form>
            <div className=" btn-wrap  mx-3 d-flex justify-content-center align-items-center">
              <button
                className="anchorBtn mt-5 py-1 px-4 mx-3"
                onClick={() =>
                  setSearchParams({
                    name: "Rohit",
                    department: "App development",
                  })
                }
              >
                Set Search Data
              </button>
            </div>
            <h3 className="mt-5 text-center">
              Direct URL Input Search Data Name = {searchName} and Department ={" "}
              {searchDept}
            </h3>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
