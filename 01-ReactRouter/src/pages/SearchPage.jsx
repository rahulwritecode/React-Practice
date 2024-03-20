import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams("");

  const [searchData, setSearchData] = useState("");

  const searchHandle = (e) => {
    e.preventDefault();
    console.log(searchData);
  };

  return (
    <>
      <div className="search-wrap py-5">
        <div className="container">
          <div className="row justify-content-center">
            <form
              action=""
              className="d-flex justify-content-center align-items-center fs-4"
            >
              <input
                type="text"
                className="p-3 mx-3"
                placeholder="Search Your service"
                onChange={(e) => setSearchData(e.target.value)}
              />

              <div className=" btn-wrap mx-3">
                <button className="anchorBtn " onClick={searchHandle}>
                  Search
                </button>
              </div>
            </form>
            <h3>Search Data = {searchData}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
