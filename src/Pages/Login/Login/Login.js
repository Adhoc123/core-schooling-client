import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');
    const {providerLogin, signIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();

    const handleSubmit = event =>{
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
        setError('');
        navigate('/')
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      });
  }
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            navigate('/')
          })
        .catch((error) => {
            console.error(error)
        });
    }
    const handleGithubSignIn = () =>{
      providerLogin(githubProvider)
      .then((result) => {
          const user = result.user;
          console.log(user)
          navigate('/')
        })
      .catch((error) => {
          console.error(error)
      });
  }
    
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required/>
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger ms-3">
           {error}
        </Form.Text>
        <ButtonGroup aria-label="Basic example" className='d-block mt-2 mx-auto'>
            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='me-4'><FaGoogle/></Button>
            <Button onClick={handleGithubSignIn} variant="outline-danger"><FaGithub/></Button>
        </ButtonGroup>
        
      </Form>
      
      
    );
};

export default Login;