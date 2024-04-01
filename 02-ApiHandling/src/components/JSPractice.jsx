import React from "react";
// import asyncData from "../JS-Practice/AsyncPractice.js";

function JSPractice() {
  // simple example of asynchronous website

  console.log("Testing 1");
  setTimeout(function () {
    console.log("Testing 2");
  }, 5000);

  console.log("Testing 3");

  // Javascript is Sychronous, Single threaded language, it has one call stack and it can just do one thing at time !
  // Callback function ()

  async function getData() {
    return "Testing Async function !";
  }

  const dataPromise = getData();
  // console.log(dataPromise);

  //   output
  //   Promise {<fulfilled>: 'Testing Async function !'}

  //  Note : always remember promise data can only be fetched through .then chain function
  //  now we can apply .then() on obove promise output data to get promise object value

  // dataPromise.then((res) =>
  //   console.log(
  //     "promise data value fetched through .then() chain function = ",
  //     res
  //   )
  // );

  return (
    <>
      <div className="container">
        <h1> Advance Javascript Concept</h1> <br />
        <ul>
          <li>
            <b>2 Core Problems faced while using Callback function</b> <br />{" "}
            <br />
            <b>
              <u>
                1] Callback Hell which also called Pyramid of Doom (calling
                multiple nested callback function )
              </u>
            </b>
            <br /> <br />
            <b>
              <u>2] Inversion of Control</u>{" "}
            </b>
            <br /> <br />
            callback hell is unmaintainable and unreadable and very complicated
            to debug becoz code grows horizontally which make it deficult to
            read !. example are as follows <br /> <br />
            We lose the control of code when we use callback function because
            our callback function operation is now depended on parent function
            which is risky if parent function found to be malfunction or filled
            wth any bug lead to disrupt all inside callback function
          </li>{" "}
          <br />
          <li>
            <pre>
              ecommerce code application <br /> const cart
              =["Pants","Jeans","shirts","Kurtas","Blazer","T-shirts"]; <br />
              api.createOrder(cart, <br />
              ____api.proceedToPayment( paymentMode, <br />
              ______api.generateInvoice( <br />
              ________api.updateWallet( <br />
              __________api.SendProductDetailstoSeller() ) ) ) )
            </pre>
          </li>
        </ul>
      </div>
    </>
  );
}

export default JSPractice;
