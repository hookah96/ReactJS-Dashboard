import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../../pictures/logo.svg';
import user from '../../../pictures/account_circle-white-36dp.svg';

const Header = ({ showColumn, setShowColumn }) => {
  return (
    <div className='container'>
      <div
        className='hamburger'
        onClick={() =>
          showColumn ? setShowColumn(false) : setShowColumn(true)
        }
      >
        <div className='line' />
        <div className='line' />
        <div className='line' />
      </div>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt=' logo' className='image' />
        </Link>
      </div>
      <div className='dashboard'>dashboard</div>
      <div className='actions'>
        <p>logout</p>
        <img src={user} alt='user' />
      </div>
    </div>
  );
};

export default Header;
