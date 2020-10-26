import React, { useState } from 'react';
import Header from './Header/index';
import NavColumn from './Navigation/index';
import './style.css';

const Layout = ({ isMobile, children }) => {
  const [showColumn, setShowColumn] = useState(false);

  return isMobile ? (
    <div className='placeFix'>
      <Header showColumn={showColumn} setShowColumn={setShowColumn} />
      <div className='content'>{children}</div>
      {showColumn && <NavColumn showColumn={showColumn} />}
    </div>
  ) : (
    <div className='placeFix'>
      <Header />
      <div className='content'>{children}</div>
      <NavColumn />
    </div>
  );
};

export default Layout;
