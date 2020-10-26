import React, { useState, useEffect } from 'react';
import Spinner from '../../components/spinner/index';
import getUsers from '../../Api/users';
import Table from '../../components/Table/index';
import './style.css';

const Users = () => {
  const [isDisabledDlt, setIsDisabledDlt] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 0,
      email: '',
      first_name: '',
      last_name: '',
      avatar: '',
    },
  ]);

  useEffect(() => {
    getUsers().then((res) => setTimeout(() => setUsers(res.data), 1500));
  }, [setUsers]);

  const deleteUsers = () => {
    let remainUsers = users.filter((user) => user.id != selectedUser);
    if (window.confirm(`Do you really want to delete user ${selectedUser}`)) {
      setIsDisabledDlt(true);
      return setUsers(remainUsers);
    }
  };
  return (
    <div className='container1'>
      {users.length === 1 ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className='mobile'>
          <div className='title'>
            <h2>Users</h2>
            <div
              type='submit'
              className={isDisabledDlt ? 'dltBtn disabledBtn' : 'dltBtn'}
              onClick={deleteUsers}
            >
              delete
            </div>
          </div>
          <Table
            users={users}
            setIsDisabledDlt={setIsDisabledDlt}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        </div>
      )}
    </div>
  );
};

export default Users;
