import React from 'react';
import logo from '../../../assets/logo.png'


const Header = () => {
    return (
        <div>
          <div className='text-center'>
          <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <h5>Sunday, November 27, 2022</h5>
          </div>
        </div>
    );
};

export default Header;