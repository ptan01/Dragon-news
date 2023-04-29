import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {


  return (
    <div>
      <div className='text-center'>
        <img className='img-fluid' src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <h5>{moment().format("dddd, MMMM D, YYYY")}</h5>
      </div>
      <Container>
        <div className='d-flex my-3'>
          <Button variant="danger">Latest</Button>
          <Marquee pauseOnHover='boolean' >
            I can be a React component, multiple React components, or just some text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quas totam officiis perferendis voluptatum nobis iusto maiores, temporibus exercitationem dolores magni. Rem minus necessitatibus voluptate quasi esse doloremque amet atque.
          </Marquee>
        </div>
       
      </Container>
    </div>
  );
};

export default Header;