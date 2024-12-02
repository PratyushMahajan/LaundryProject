import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { Link } from 'react-router-dom';
import '../style/s.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

 
    const Login = document.getElementById('Login');

    useEffect(() => {
      // Hide Navbar and Footer
      //document.getElementById('navbar').style.display = 'none';
      document.getElementById('footer').style.display = 'none';
  
      // Cleanup on unmount
      return () => {
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
            className="rounded-3 p-3 mb-1  bg-grey"
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
            className="rounded-3 p-3 mb-4  bg-grey"
          />
          <div className="form-text text-danger"> 
            {password && password.length < 6 && 'Password must be at least 6 characters long.'}
          </div>
        </div>

        <button type="submit" 
        className="btn btn-primary w-100 p-3"
        disabled={!isFormValid}>
          Log In
        </button>
      
        

        <p className="text-center mt-5 fs-5 " style={{color:"grey"}}>
        Don't have an account? <Link to="/signup " className='text-decoration-none text-primary' >Sign up</Link>
      </p>

      <p className="text-center mt-5 fs-5 text-center" style={{color:"grey"}}>
        <Link to="/ " className='text-decoration-none text-primary-custom' >Go to Home</Link>
      </p>

      </form>
      
    </div>
  );
}

export default LoginForm;
