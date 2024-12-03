import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./Components/Home/Home";
import LoginForm from "./Components/Auth/login/Login";
import SignupForm from "./Components/Auth/signup/Signup";
import User from "./Components/Dashboard/User";
import Pickup from "./Components/Dashboard/Pickup";
import Footer from "./Components/Commonfile/Footer";
import Partner from "./Components/Partner/Partner";
import ShopOwner from "./Components/Dashboard/ShopOwner";

import '@fontsource/poppins';
import NavBar1 from "./Components/Commonfile/NavBar1";

function App() {
  //Hiding navbar at login, signup
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup","/users","/pickup","/ShopOwner"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <NavBar1 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/ShopOwner" element={<ShopOwner />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
  
        <Footer />
  
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
