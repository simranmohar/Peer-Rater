// bootstrap stuff

import { Footer, SideBar, NavBar } from "./components";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Outlet } from "react-router-dom";

// Routing stuff

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <NavBar />

        <div className="container" id="main-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
