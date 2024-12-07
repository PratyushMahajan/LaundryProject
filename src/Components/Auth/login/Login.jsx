import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

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
    // Add your login logic here
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 col-lg-4">
        <form onSubmit={handleSubmit} noValidate>
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
          <h1 className="font-weight-bold mb-4 text-center">Welcome Back!</h1>

          <div className='mb-2'>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
              className="form-control form-control-lg"
            />
            <div className="form-text text-danger"> 
              {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && 'Enter a valid email address.'}
            </div>
          </div>

          <div className='mb-2'>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="form-control form-control-lg"
            />
            <div className="form-text text-danger"> 
              {password && password.length < 6 && 'Password must be at least 6 characters long.'}
            </div>
          </div>

          <button type="submit" 
            className="btn btn-primary btn-lg w-100" 
            disabled={!isFormValid}>
            Log In
          </button>

          <p className="text-center mt-3 fs-5" style={{ color: "grey" }}>
            Don't have an account? <Link to="/signup" className='text-decoration-none text-primary-custom'>Sign up</Link>
          </p>

          <p className="text-center mt-5 fs-5" style={{ color: "grey" }}>
            <Link to="/" className='text-decoration-none text-primary-custom'>Go to Home</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;