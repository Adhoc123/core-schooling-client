import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {providerLogin, signIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
          })
        .catch((error) => {
            console.error(error)
        });
    }
    const handleOnSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user)
          form.reset();
          navigate('/')
        })
        .catch((error) => {
          console.error(error)
        });
    }
    return (
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="name" type="email" placeholder="Enter email" required/>
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger ms-3">
            We'll never share your email with anyone else.
        </Form.Text>
        <ButtonGroup aria-label="Basic example" className='d-block mt-2 mx-auto'>
            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='me-4'><FaGoogle/></Button>
            <Button variant="outline-danger"><FaGithub/></Button>
        </ButtonGroup>
        
      </Form>

      
    );
};

export default Login;