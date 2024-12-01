import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";



import Home from "./Components/Home/Home"

import LoginForm from "./Components/Auth/login/Login"
import SignupForm from "./Components/Auth/signup/Signup"
import User from "./Components/Dashboard/User"
import Navbar from "./Components/Commonfile/Navbar"
import Footer from "./Components/Commonfile/Footer"
import Partner from "./Components/Partner/Partner";



import '@fontsource/poppins';

function App() {
 

  return (
    
     <Router>
      <div id="navbar">
      <Navbar/>
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<User/>}/>
      <Route path="/headers" element={<Headers/>}/>
       
        <Route path="/Login" element={<LoginForm/>}/>
        <Route path="/Signup" element={<SignupForm/>}/>
        <Route path="/partner" element={<Partner />} />
      </Routes>
      <div id="footer">
      <Footer/>
      </div>
     </Router>
        
       
    
  )
}

export default App