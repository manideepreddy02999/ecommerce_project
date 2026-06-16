import React from "react";
import Router from "./AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import "./App.css";
import Cc from "./pages/Cc";
import { AuthContextProvider } from "./authContext/Auth";
const App = () => {
  // localStorage.setItem("token", "ddd");
  return (
    <>
      <Navbar />
      <div className="container">
        {/* <Cc /> */}

        <div className="content">
          <AppRoutes />
        </div>
        {/* <div className="footer">
      <Footer />
      </div> */}
      </div>
    </>
  );
};

export default App;
