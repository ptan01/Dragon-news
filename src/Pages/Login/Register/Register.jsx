import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container>
            <h2 className='text-center'>Register your account</h2>
            <div className='w-25 mx-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder= "Enter Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name='checkbox' label="Accept Term & Conditions" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <p>Already Have An Account ? <Link to='/login'>Login</Link></p>
                    <Form.Text className='text-success'>
                        
                    </Form.Text>
                    <Form.Text className='text-danger'>
                        
                    </Form.Text>
                </Form>
            </div>
        </Container>
    );
};

export default Register;