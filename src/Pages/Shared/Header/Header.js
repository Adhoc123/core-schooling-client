import React, { useContext, useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../../../assets/assets/logo.png';
import DarkModeToggle from "react-dark-mode-toggle";
import './Header.css';
import { FaUser, FaSignInAlt } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const [theme, setTheme] = useState('light');
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const navigate = useNavigate();
    const toggleTheme = () => {
        if (theme === 'light') {
        setTheme('dark');
        } else {
        setTheme('light');
        }
    };
    const handleLogin = () =>{
        navigate('/login');
    }
    const handleCourses = () =>{
         navigate('/courses');
    }
    const handleLogOut = () =>{
         logOut()
         .then(()=>{})
         .catch(error =>{
           console.error(error)
         })
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
      <Navbar collapseOnSelect className={theme} expand="lg" bg='light'  variant="light">
      <Container>
        <Image src={img} roundedCircle style={{height:'95px'}}></Image>
        <Navbar.Brand href="#home" className='text-success fw-bold fs-1'>coreSchooling</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav >
            <Nav.Link><Link to='/contents' style={{ textDecoration: 'none', fontWeight:'bold', fontSize:'20px' }}>Contents</Link></Nav.Link>
            <Nav.Link><Link to='/blog' style={{ textDecoration: 'none', fontWeight:'bold', fontSize:'20px' }}>Blog</Link></Nav.Link>
            <Nav.Link><Link to='/faq' style={{ textDecoration: 'none', fontWeight:'bold', fontSize:'20px' }}>FAQ</Link></Nav.Link>
            <Nav.Link href="#pricing" onClick={toggleTheme}>
            <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
            />
           </Nav.Link>
           {
              user?.uid?
              <>
                <Nav.Link href="#features">{user?.displayName}</Nav.Link>
                <Nav.Link eventKey={2} href="#memes"className='d-inline'>
                    {
                                user.photoURL?
                                <Image src={user.photoURL} title={user?.displayName} roundedCircle style={{height:'20px'}}></Image>
                                :
                                <FaUser></FaUser>
                    }    
                </Nav.Link>
                <button className='logOut' onClick={handleLogOut}>Log Out</button>
              </>
               :
               <Nav.Link onClick={handleLogin} ><FaSignInAlt/></Nav.Link> 
           }
           
            {/* <Nav.Link onClick={handleLogin} ><FaSignInAlt/></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    );
};

export default Header;