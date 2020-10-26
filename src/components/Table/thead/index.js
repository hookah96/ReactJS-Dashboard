import React from 'react';
import './style.css';

const Header = () => {
  const header = ['', 'id', 'last name', 'first name', 'email', 'avatar'];
  return (
    <tr>
      {header.map((el, i) => (
        <th key={i}>{el}</th>
      ))}
    </tr>
  );
};

export default Header;
