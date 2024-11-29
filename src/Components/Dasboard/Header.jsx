import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar bg="light" className="px-4">
      <Navbar.Brand href="#home">Order Id</Navbar.Brand>
      
      <div>
        <span className="me-3">Logged in as <strong>Alex</strong></span>
        <Button variant="outline-primary" className="me-2">Messages</Button>
        <Button variant="outline-primary" className="me-2">Notifications</Button>
      </div>
    </Navbar>
  );
};

export default Header;

