import React from 'react';
import './style.css';

const ColorCard = ({ name, year, color }) => {
  return (
    <div style={{ backgroundColor: `${color}` }} className='card'>
      <div className='hex-name'>{color}</div>
      <div className='bot-title'>
        <div className='title-item'> {name}</div>
        <div className='title-item'>{year}</div>
      </div>
    </div>
  );
};

export default ColorCard;
