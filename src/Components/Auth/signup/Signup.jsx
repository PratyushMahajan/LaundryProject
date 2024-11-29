import React, { useState, useRef } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';  
import { Link } from 'react-router-dom';
//import './style.css';
import './s.css'

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const formRef = useRef(null);

  const [isFormVisible, setFormVisible] = useState(false);  // React hook to manage form visibility

  const handleFormToggle = () => {  // Function to toggle form visibility
    setFormVisible(!isFormVisible);  // Toggle between true and false to show/hide form
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted"); 

    if (!firstName || !lastName || !phoneNumber || !email || !password) {
      setError('All fields are required.');
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setError('Phone number must be 10 digits.');
      return;
    }

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setError('');
    console.log('Form submitted:', { firstName, lastName, phoneNumber, email, password });
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');  // Ensures only numbers are entered
    setPhoneNumber(value);
    validateForm();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
    validateForm();
  };

  const isFormValid = firstName && lastName && phoneNumber && email && password;

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  

  return (
    <Container fluid style={{ minHeight: '100vh' }}>
      <Row className="align-items-center d-flex" style={{ minHeight: '100vh' }}>
        <Col md={6} className="text-center">
          <h1 className =" text-center font-weight-bold mb-4" style={{color:'#1e1f21'}}>Welcome to  Laundry Service</h1>
          <p className="text-center font-weight-grey mb-4 ">Save 3 hours this week by using our services.</p>
          <Button className="btn  btn-lg rounded-4 p-4 mb-3 w-150 " style={{ backgroundColor: '#ff7f50', border:'none'}}   onClick={handleFormToggle}>
            {isFormVisible ? 'Close' : 'Sign up with email'}  {/* Button text toggles based on form visibility */}
          </Button>
          <p className="text-center mt-5 fs-5 " style={{color:"grey"}}>
            Already have an account?<br/> 
            <Link to="/login" className='text-decoration-none text-primary-custom' style={{ color: '#ff7f50' }}>Login</Link>
          </p>
        </Col>

        <Col md={6} className="text-center">
          <img src="https://via.placeholder.com/400" alt="Laundry" className="img-fluid" />
        </Col>
      </Row>

      <div ref={formRef} className="signup-form">
        <h2 className="form-heading">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>} {/* Displays error messages */}
          
            
        
              {/* Corrected class name from "button" to "Button" and "container" to "Container" */}
              <div className={`form-container ${isFormVisible ? 'show' : ''}`}>  {/* Conditional class for showing form */}
              <h2 className =" font-weight-bold mb-4">Let's Get Started!</h2>
              

               <div className="form-group ">
                  <input 
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="form-group  form-group-lg rounded-4 p-3 mb-1 border-0"
                  />
                  <div className="form-text text-danger mb-1">
                    Please Enter your First name
                </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="form-group  form-group-lg rounded-4 p-3 mb-1 border-0 "
                  />
                  <div className="form-text text-danger mb-1">
                  Please Enter your last name

                </div>
                </div>



                <div className="form-group">
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                    className="form-group  form-group-lg rounded-4 p-3 mb-1 border-0"

                  />

                <div className="form-text text-danger mb-1">
                  {phoneNumber && !/^\d{10}$/.test(phoneNumber) && 'Phone number must be 10 digits.'}
                </div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-group  form-group-lg rounded-4 p-3 mb-1 border-0"

                  />
                  <div className="form-text text-danger mb-1">
                    {email && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email) && 'Please enter a valid email address.'}
                </div>
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    placeholder="Create Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-group  form-group-lg  rounded-4 p-3 mb-1 border-0"

                  />
                  <div className="form-text text-danger mb-1">
                        Password must be at least 6 characters long.
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={!isFormValid} 
                    className="btn btn-lg text-white rounded-4 p-3 mb-2 "  
                    style={{background: "#e67350"}}>

                    Sign Up
                </button>
              </div>
           
        </form>
      </div>
    </Container>
  );
}

export default SignupForm;
