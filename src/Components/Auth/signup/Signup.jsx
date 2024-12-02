 import React, { useState, useRef, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';  
import { Link, useNavigate } from 'react-router-dom';
//import { FaArrowLeft } from 'react-icons/fa';


import "../style/s.css";

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isFirstNameFocused, setIsFirstNameFocused]=useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  
  //const [role, setRole] = useState('');

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

  const formRef = useRef(null);

  /*const goBack = () => {
    navigate(-1)
  }*/

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
    const value = e.target.value.replace(/[^0-9]/g, '');  
    setPhoneNumber(value);
    validateForm();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
    validateForm();
  };
  
  const isFormValid = firstName && lastName && phoneNumber && email && password;

  /*const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };*/

  

  return (
    
    <Container fluid style={{ minHeight: '100vh' }}>
      <Row className="align-items-center d-flex" style={{ minHeight: '100vh' }}>
     
        <Col md={6} className="text-center align-items-center">
          <h1 className =" text-center font-weight-bold mb-4" style={{color:'#1e1f21'}}>Welcome to  Laundry Service</h1>
          <p className="text-center font-weight-grey mb-4 ">Save 3 hours this week by using our services.</p>
          <Button className="ct-button btn btn-lg rounded-4 p-4 mb-3 w-150 " style={{ backgroundColor: '#535bcd', border:'none'}}   onClick={handleFormToggle}>
            {isFormVisible ? 'Close' : 'Sign up with email'}  {/* Button text toggles based on form visibility */}
          </Button>
          <p className="text-center mt-5 fs-5 " style={{color:"grey"}}>
            Already have an account?<br/> 
            <Link to="/login" className='text-decoration-none text-primary-custom' >Login Instead</Link>
          </p>
          <p className="text-center mt-5 fs-5 " style={{color:"grey"}}>
            <Link to="/" className='text-decoration-none text-primary-custom' >Go to Home</Link>
          </p>
        </Col>

        <Col md={6} className="p-0 position-relative "   >
          <img src="src/Components/Auth/image/laundryservice2.jpg" alt="Laundry" className="img-fluid " 
             style={{ objectFit: "cover", width: "150%", height: "150%", overflow:"hidden"}} 
              />
          
        </Col>
      </Row>

      <div ref={formRef} className="signup-form">

     
        

        <form onSubmit={handleSubmit}>
          {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>} {/* Displays error messages */}
              
              <div className={`ct-form-container d-flex flex-column justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-light  ${isFormVisible ? 'show' : ''}`} >  {/* Conditional class for showing form */}
             
              <h2 className =" font-weight-bold mb-4">Let's Get Started!</h2>

         
            
             
              

               <div className="form-group " >
                  <input 
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onFocus={() => setIsFirstNameFocused(true)}
                    required
                    className="ct-input ct-input-lg rounded-4 p-3 mb-2 border-0"
                  />
                   {isFirstNameFocused && !firstName && (
                  <div className="form-text text-danger mb-1">
                    Please Enter your First name
                </div>
              )}

                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onFocus={() => setIsLastNameFocused(true)}
                    required
                    className="ct-input ct-input-lg rounded-4 p-3 mb-2 border-0 "
                  />
                   {isLastNameFocused && !lastName && (
                  <div className="form-text text-danger mb-1">
                  Please Enter your last name

                </div>
                  )}
                </div>



                <div className="form-group">
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                    className="ct-input ct-input-lg rounded-4 p-3 mb-2 border-0"

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
                    className="ct-input ct-input-lg rounded-4 p-3 mb-2 border-0"

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
                    className="ct-input ct-input-lg  rounded-4 p-3 mb-1 border-0"

                  />
                   {password && password.length < 6 && (
                  <div className="form-text text-danger mb-1 p-3">
                        Password must be at least 6 characters long.
                    </div>
                   )}
                </div>

                <button 
                    
                    type="submit" 
                    disabled={!isFormValid} 
                    className="ct-button btn btn-primary btn-lg text-white rounded-4 p-3 mt-2 "  
                    >

                    Sign Up
                </button>
                <p className="text-center mt-5 fs-5 " style={{color:"grey"}}> 
                  <Link to="/login" className='text-decoration-none text-primary-custom' >Go Back</Link>
                </p>
              </div>
          
              
        </form>
       
      </div>
    </Container>
  );
}

export default SignupForm;
