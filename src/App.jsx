
import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"



import Home from "./Components/Home/Home"

import User from "./Components/Dashboard/User"
import Navbar from "./Components/Commonfile/Navbar"
import Footer from "./Components/Commonfile/Footer"
import './components/style/s.css';
import '@fontsource/poppins';
import LoginForm from "./Components/Auth/login/Login"
import SignupForm from "./Components/Auth/signup/Signup"


function App() {
 

  return (
    
     <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<User/>}/>
      <Route path="/headers" element={<Headers/>}/>
       
        <Route path="/Login" element={<LoginForm/>}/>
        <Route path="/Signup" element={<SignupForm/>}/>
      </Routes>
      <Footer/>
     </Router>
        
       
    
  )
}

export default App