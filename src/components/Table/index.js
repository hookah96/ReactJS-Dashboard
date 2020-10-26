import React from 'react';
import Header from './thead/index';
import TableBody from './tbody/index';
import './style.css';

const Table = ({ users, ...rest }) => {
  return (
    <div className='mobile-resp'>
      <table>
        <thead>
          <Header />
        </thead>
        <tbody>
          <TableBody users={users} props={{ ...rest }} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
