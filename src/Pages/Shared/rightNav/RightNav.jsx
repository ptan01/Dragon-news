import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import './rightNav.css'

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='my-3' style={{ width: '100%' }} variant="outline-primary"> <FaGoogle></FaGoogle>Login with Google</Button>
            <Button style={{ width: '100%' }} variant="outline-secondary"> <FaGithub></FaGithub>Login with Github</Button>
            <div>
                <h4 className='my-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item>Facebook</ListGroup.Item>
                    <ListGroup.Item>Twitter</ListGroup.Item>
                    <ListGroup.Item>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <div className='bg-img'>
                <h2>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam alias, sequi voluptatem molestias laboriosam soluta quasi tempore nesciunt recusandae nobis neque maiores quae deleniti quisquam pariatur eveniet necessitatibus repellendus dolorum!</p>
                <Button variant='danger'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;