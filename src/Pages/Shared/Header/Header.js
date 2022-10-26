import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../../../assets/assets/logo.png';
import DarkModeToggle from "react-dark-mode-toggle";
import './Header.css';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const [theme, setTheme] = useState('light');
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const toggleTheme = () => {
        if (theme === 'light') {
        setTheme('dark');
        } else {
        setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        // <div className={theme}>
        //     <button onClick={toggleTheme}>Toggle Theme</button>
        //     <h1>Hello, world!</h1>
        // </div>
        <Navbar collapseOnSelect className={theme} expand="lg"  variant="light">
      <Container>
        <Image src={img} roundedCircle style={{height:'95px'}}></Image>
        <Navbar.Brand href="#home" className='text-success fw-bold fs-1'>coreSchooling</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">Courses</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing" onClick={toggleTheme}>
            <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
            />
           </Nav.Link>
            <Nav.Link href="#deets" >Login <FaUser></FaUser></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;