import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/s.css";

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleFormToggle = () => {
    setFormVisible(!isFormVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
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

    setError(''); // Clear error if no validation errors
    console.log('Form submitted:', { firstName, lastName, phoneNumber, email, password });
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(value);
  };

  const isFormValid = firstName && lastName && phoneNumber && email && password &&
    /^\d{10}$/.test(phoneNumber) && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email) && password.length >= 6;

  return (
    <Container fluid>
      <Row className="align-items-center d-flex" style={{ minHeight: '100vh' }}>
        <Col md={6} className="text-center align-items-center">
          <h1 className="text-center font-weight-bold mb-4" style={{ color: '#1e1f21' }}>Welcome to Laundry Service</h1>
          <p className="text-center font-weight-grey mb-4">Save 3 hours this week by using our services.</p>
          <Button
            className="btn btn-primary btn-lg rounded-4 p-4 mb-3 w-75"
            style={{ backgroundColor: '#535bcd', border: 'none', maxWidth: '425px' }}
            onClick={handleFormToggle}
          >
            {isFormVisible ? 'Close' : 'Sign up with email'}
          </Button>
          <p className="text-center mt-5 fs-5" style={{ color: "grey" }}>
            Already have an account?<br />
            <Link to="/login" className='text-decoration-none text-primary-custom'>Login Instead</Link>
          </p>
          <p className="text-center mt-5 fs-6" style={{ color: "grey" }}>
            <Link to="/" className='text-decoration-none text-primary-custom'>Go to Home</Link>
          </p>
        </Col>

        <Col md={6} className="p-0 position-relative">
          <img
            src="src/Components/Auth/image/laundryservice2.jpg"
            alt="Laundry"
            className="img-fluid"
            style={{ objectFit: "cover", width: "100%", height: "100%" }} // Adjusted for responsiveness
          />
        </Col>
      </Row>

      <div className="container my-5 d-flex justify-content -center align-items-center vh-100">
        <div className="col-md-6 col-lg-4">
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

              <div className={`ct-form-container d-flex flex-column justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-light ${isFormVisible ? 'show' : ''}`}>
                <h2 className="font-weight-bold mb-4">Let's Get Started!</h2>

                <Form.Group className="mb-2">
                  <Form.Control
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onFocus={() => setIsFirstNameFocused(true)}
                    required
                    className=" responsive-input"
                  />
                  {isFirstNameFocused && !firstName && (
                    <Form.Text className="text-danger mb-1">
                      Please Enter your First name
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Control
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onFocus={() => setIsLastNameFocused(true)}
                    required
                    className="responsive-input"
                  />
                  {isLastNameFocused && !lastName && (
                    <Form.Text className="text-danger mb-1">
                      Please Enter your Last name
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Control
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                    className=" responsive-input"
                  />
                  {phoneNumber && !/^\d{10}$/.test(phoneNumber) && (
                    <Form.Text className="text-danger mb-1">
                      Phone number must be 10 digits.
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className=" responsive-input"
                  />
                  {email && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email) && (
                    <Form.Text className="text-danger mb-1">
                      Please enter a valid email address.
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Control
                    type="password"
                    id="password"
                    placeholder="Create Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className=" form-control responsive-input"
                  />
                  {password && password.length < 6 && (
                    <Form.Text className="text-danger mb-1">
                      Password must be at least 6 characters long.
                    </Form.Text>
                  )}
                </Form.Group>

                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className="ct-button btn btn-primary btn-lg rounded-4 p-4 mb-3 w-50"
                 style={{ backgroundColor: '#535bcd', border: 'none', maxWidth: '360px' }}
                   >
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SignupForm;