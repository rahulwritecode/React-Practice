import React from "react";

function HomePage() {
  return (
    <>
      <div className="py-5">
        <h1 className="text-center">Home Page</h1>

        <div className="offset-wrap pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-2 offset-md-1">
                <div className="div-wrap bg-info">
                  <h3 className="text-center">1</h3>
                </div>
              </div>
              <div className="col-md-2 ">
                <div className="div-wrap bg-info">
                  <h3 className="text-center">2</h3>
                </div>
              </div>
              <div className="col-md-2 ">
                <div className="div-wrap bg-info">
                  <h3 className="text-center">3</h3>
                </div>
              </div>
              <div className="col-md-2 ">
                <div className="div-wrap bg-info">
                  <h3 className="text-center">4</h3>
                </div>
              </div>
              <div className="col-md-2 ">
                <div className="div-wrap bg-info">
                  <h3 className="text-center">5</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
