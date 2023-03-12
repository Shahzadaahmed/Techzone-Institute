import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Note: Auauth routes...!
import Login from "./pages/Login";
import Register from "./pages/Register";

// Note: Authorized routes...!
import Home from "./pages/home/home";
import Header from "./pages/header/header";
import YourCart from "./pages/your-cart/your-cart";

const App = () => {

  // Note: Checking user auth status...!
  const { authenticatedUser } = useSelector(({ authStates }) => authStates);
  console.log("User auth status: ", authenticatedUser);

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<YourCart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
