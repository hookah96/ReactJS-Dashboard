import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavColumn = ({ showColumn }) => {
  const actions = [
    { id: 0, name: 'Colors', path: '/colors', isSelected: false },
    { id: 1, name: 'Users', path: '/users', isSelected: false },
    { id: 2, name: 'Settings', path: '/settings', isSelected: false },
  ];

  const liItems = actions.map((el, i) => (
    <div className='listItem' key={el.id}>
      <NavLink to={`${el.path}`} className='navLink'>
        <li>{el.name}</li>
      </NavLink>
    </div>
  ));

  return (
    <div className={showColumn ? 'column active' : 'column exiting'}>
      <ul className='list'>{liItems}</ul>
      <div className='footer'>© 2020 Netmechanics</div>
    </div>
  );
};

export default NavColumn;
