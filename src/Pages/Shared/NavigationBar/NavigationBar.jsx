import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" className='my-4' variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/'>Home</Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/career">Career</Nav.Link>
                        </Nav>
                       
                            {user && <Nav.Link href="#profile"><FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle></Nav.Link>}
                            {user ? <Button variant="dark">Logout</Button> : <Link to='/login' ><Button variant="dark">Login</Button></Link>}
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;