
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const Register = () => {
    const [error, setError] = useState();
    const {createUser} = useContext(AuthContext);
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,' ',photoURL,' ',email,' ',password)
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error =>{
            console.error(error);
            setError(error.message);
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" 
                    label={<>Accept <Link to='/terms'>terms and conditions</Link></>}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                Register
                </Button>
                <Form.Text className="text-danger ms-3">
                {error}
                </Form.Text>
                <p>Already have an account? Please <Link to='/login'>login</Link></p>
      </Form>
    );
};

export default Register;