import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home/Home";
// import { BrowserRouter, Route } from "react-router-dom";
// import Home from "./Home/Home";
// import Login from "./Login/Login";
// import SignUp from "./SignUp/SignUp";
// import PasswordRecovery from "./PasswordRecovery/PassRecovery";
// import Footer from "./Footer/Footer";
// import About from "./About/About";
// import Search from "./Search/Search";

function Public() {
  return (
    <main>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    </main>
  );
}

export default Public;