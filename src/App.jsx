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
import ProfileSlider from "./Components/Auth/contacts/contact";
import LaundriesPage from "./Components/Shops/shoplist";

import '@fontsource/poppins';
import NavBar1 from "./Components/Commonfile/NavBar1";
import AboutUs from "./Components/Home/AboutUs";

function App() {
  //Hiding navbar at login, signup
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup","/users","/pickup","/ShopOwner","/shopOwner"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <NavBar1 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/users" element={<User />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/ShopOwner" element={<ShopOwner />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<ProfileSlider/>} />
        <Route path="/shoplist" element={<LaundriesPage/>} />
      </Routes>
  
        < Footer/>
  
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
