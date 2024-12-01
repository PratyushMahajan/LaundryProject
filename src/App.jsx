
import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"



import Home from "./Components/Home/Home"

import LoginForm from "./Components/Auth/login/Login"
import SignupForm from "./Components/Auth/signup/Signup"
import User from "./Components/Dashboard/User"
import Pickup from "./Components/Dashboard/Pickup"
import Navbar from "./Components/Commonfile/Navbar"
import Footer from "./Components/Commonfile/Footer"
import Partner from "./Components/Partner/Partner";
import ShopOwner from "./Components/Dashboard/ShopOwner"


import '@fontsource/poppins';

function App() {
 

  return (
    
     <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<User/>}/>
      <Route path="/pickup" element={<Pickup/>}/>
      <Route path="/ShopOwner" element={<ShopOwner/>} />
      <Route path="/headers" element={<Headers/>}/>
       
        <Route path="/Login" element={<LoginForm/>}/>
        <Route path="/Signup" element={<SignupForm/>}/>
        <Route path="/partner" element={<Partner />} />
      </Routes>
      <Footer/>
     </Router>
        
       
    
  )
}

export default App