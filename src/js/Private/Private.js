import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Header from "./Header/Header";
// import Home from "./Home/Home";
// import Login from "./Login/Login";
// import SignUp from "./SignUp/SignUp";
// import PasswordRecovery from "./PasswordRecovery/PassRecovery";
// import Footer from "./Footer/Footer";
// import About from "./About/About";
// import Search from "./Search/Search";

function Private(props) {
  return (
    <main>
      <h1>Private.</h1>
      <BrowserRouter>
        {/* <Header />
        <Route path="/" exact component={Home} />
        <Route
          path="/login"
          render={() => <Login setAuthentication={props.setAuthentication} />}
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/passwordRecovery" component={PasswordRecovery} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search}/>
        <Footer /> */}
      </BrowserRouter>
    </main>
  );
}

export default Private;