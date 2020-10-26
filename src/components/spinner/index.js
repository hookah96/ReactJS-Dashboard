import React from 'react';
import './style.css';

const Spinner = () => {
  return (
    <div className='background'>
      <div className='spinner' />
      <div className='loading'>loading...</div>
    </div>
  );
};

export default Spinner;
