import { Outlet } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <>
      <HeaderBar />
      <Outlet />
      <FooterBar />
    </>
  );
}

export default App;
