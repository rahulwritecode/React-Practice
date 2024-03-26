import ApiPostMethod from "./components/ApiPostMethod";
import FetchApiOperation from "./components/FetchApiOperation";
import HandleApiCall from "./components/HandleApiCall";
import JSPractice from "./components/JSPractice";

function App() {
  return (
    <>
      {/* <h1 className="text-center py-3 ">API Handling</h1> */}
      {/* <HandleApiCall /> */}

      <FetchApiOperation />

      <br />

      <ApiPostMethod />

      <br />

      <JSPractice />
    </>
  );
}

export default App;
