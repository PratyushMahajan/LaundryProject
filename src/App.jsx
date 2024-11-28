
import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"



import Home from "./Components/Home/Home"
import Login from "./Components/Auth/login/Login"
import Signup from "./Components/Auth/signup/Signup"
import User from "./Components/Dashboard/User"
import Navbar from "./Components/Commonfile/Navbar"
import Footer from "./Components/Commonfile/Footer"
import '@fontsource/poppins';


function App() {
 

  return (
    
     <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<User/>}/>
      <Route path="/headers" element={<Headers/>}/>
       
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
      <Footer/>
     </Router>
        
       
    
  )
}

export default App