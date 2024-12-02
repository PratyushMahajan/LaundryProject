import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { Link } from 'react-router-dom';
import '../style/s.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Hide Navbar and Footer
   //document.getElementById('navbar').style.display = 'none';
    document.getElementById('footer').style.display = 'none';

    const Login = document.getElementById('Login');
  
    /*if (specificButton) {
    specificButton.style.display = 'none';
  }*/ 


    // Cleanup on unmount
    return () => {
    /*  if (specificButton) {
        specificButton.style.display = 'block'; // Restore the button visibility
      }*/
     //document.getElementById('navbar').style.display = 'block';
      document.getElementById('footer').style.display = 'block';
    };
    
  }, []);


 const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(email);
    const isPasswordValid = password.length >= 6;
    setIsFormValid(isEmailValid && isPasswordValid);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
    validateForm();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setError('Please enter valid email and password.');
      return;
    }
    console.log('Logged in:', { email, password });
  };

  return (
    
    <div className="container mt-1 d-flex justify-content-center align-items-center vh-100" >
      <form onSubmit={handleSubmit} noValidate>
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

        <h1 className =" font-weight-bold mb-4  ">Welcome Back!</h1>


        <div className='mb-3'>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            className="rounded-3 p-4 mb-1  bg-grey"
          />
          <div className="form-text text-danger"> 
            {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && 'Enter a valid email address.'}
          </div>
        </div>

        <div className='mb-3'>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="rounded-3 p-4 mb-4  bg-grey"
          />
          <div className="form-text text-danger"> 
            {password && password.length < 6 && 'Password must be at least 6 characters long.'}
          </div>
        </div>
      <center>
        <button type="submit" /* disabled={!isFormValid} */className='btn btn-primary btn-lg'>
          Login
        </button>
      </center>
        

      <p className="text-center mt-4 fs-5 text-center" style={{color:"grey"}}>
        Don't have an account? <Link to="/signup " className='text-decoration-none text-primary-custom' >Sign up</Link>
      </p>

      <p className="text-center mt-5 fs-5 text-center" style={{color:"grey"}}>
        <Link to="/ " className='text-decoration-none text-primary-custom' >Go to Home</Link>
      </p>

      </form>
      
    </div>
  );
}

export default LoginForm;
