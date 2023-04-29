import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const { signIn} = useContext(AuthContext) ;

    const navigate = useNavigate()
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e)=>{
        e.preventDefault() 
        const form = e.target ;
        const email = form.email.value ;
        const pass = form.password.value ;
        console.log(email, pass)
        signIn(email, pass)
        .then((result)=>{
            const user = result.user ;
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    return (
        <Container>
            <h2 className='text-center'>Login your account</h2>
            <div className='w-25 mx-auto'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <p>Don't Have An Account ? <Link to='/register'> Register</Link></p>
                    <Form.Text className='text-success'>
                        
                    </Form.Text>
                    <Form.Text className='text-danger'>
                        
                    </Form.Text>
                </Form>
            </div>
        </Container>
    );
};

export default Login;