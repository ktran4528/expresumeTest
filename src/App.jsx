import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';
import './components/Landing.css';
import logo from './components/images/apple-touch-icon.png';

import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar style={{background: "linear-gradient(to right, #35119d, #7415f0)"}}fixed='top'  variant="dark" expand="lg">
        <Navbar.Brand href="home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex">
            <Nav.Link as={Link} to="/home" className='customNav'>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className='customNav'>About</Nav.Link>
            <Nav.Link as={Link} to="/pricing"className='customNav'>Pricing</Nav.Link>
            <Nav.Link as={Link} to="/home" className='customNav'>Join The Waitlist</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
