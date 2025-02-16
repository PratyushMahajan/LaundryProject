import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../../../features/authSlice';
import {jwtDecode} from 'jwt-decode';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const { loading, error, token, userRoles } = useSelector((state) => state.auth);
  
    useEffect(() => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = emailPattern.test(email);
      const isPasswordValid = password.length >= 6;
      setIsFormValid(isEmailValid && isPasswordValid);
    }, [email, password]);
  
    useEffect(() => {
      if (token) {
        const decodedToken = jwtDecode(token);
        const role = decodedToken.authorities;  // Correct key
        console.log('Decoded Role:', role);
    
        if (role) {
          localStorage.setItem('role', role);
          redirectToDashboard(role);
        }
      }
    }, [token]);
    
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      dispatch(clearError());
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      dispatch(clearError());
    };
  
    const redirectToDashboard = (userRoles) => {
      if (Array.isArray(userRoles)) {
        if (userRoles.includes('ROLE_ADMIN')) navigate('/admin');
        else if (userRoles.includes('ROLE_SHOP')) navigate('/ShopOwner');
        else if (userRoles.includes('ROLE_DELIVERY')) navigate('/pickup');
        else navigate('/');
      } else {
        // Fallback if userRoles is a string
        switch (userRoles) {
          case 'ROLE_ADMIN':
            navigate('/admin');
            break;
          case 'ROLE_SHOP':
            navigate('/shopform');
            break;
          case 'ROLE_DELIVERY':
            navigate('/pickup');
            break;
          default:
            navigate('/');
        }
      }
    };
    
    useEffect(() => {
      return () => {
        dispatch(clearError());
      };
    }, [])

    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!isFormValid) return;
  
      const result = await dispatch(loginUser({ email, password }));
      console.log('Result:', result);
  
      if (result.meta.requestStatus === 'fulfilled') {
        const { token } = result.payload || {};
        if (token) {
          localStorage.setItem('token', token);
          const decodedToken = jwtDecode(token);
          const userRoles = decodedToken.authorities || decodedToken.userRoles;
          redirectToDashboard(userRoles);
        }
      }
      
    };
  

  // if (token) return <Navigate to="/" replace />;

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 col-lg-4">
        <form onSubmit={handleSubmit} noValidate>
          {error && <div className="text-danger mb-3">{error}</div>}
          <h1 className="font-weight-bold mb-4 text-center">Welcome Back!</h1>

          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
              className="form-control form-control-lg"
            />
            {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
              <div className="form-text text-danger">Enter a valid email address.</div>
            )}
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="form-control form-control-lg"
            />
            {password && password.length < 6 && (
              <div className="form-text text-danger">Password must be at least 6 characters long.</div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100"
            disabled={!isFormValid || loading}
          >
            {loading ? 'Logging In...' : 'Login'}
          </button>

          <p className="text-center mt-3 fs-5 text-muted">
            Don't have an account?{' '}
            <Link to="/signup" className="text-decoration-none text-primary">
              Sign up
            </Link>
          </p>

          <p className="text-center mt-4 fs-5 text-muted">
            <Link to="/" className="text-decoration-none text-primary">
              Go to Home
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
