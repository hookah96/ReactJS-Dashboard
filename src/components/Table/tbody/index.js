import React from 'react';
import './style.css';

const TableBody = ({ users, props: { setIsDisabledDlt, setSelectedUser } }) => {
  const sliceAvatar = (avatar) =>
    avatar.substr(avatar.indexOf('r/') + 2).replace('/128.jpg', '');

  const handleSelectedUsers = (userID) => {
    setSelectedUser(userID);
    setIsDisabledDlt(false);
  };

  return users.map((user, i) => (
    <tr key={user.id} className={user.id % 2 === 0 ? 'dark-row' : null}>
      <td>
        <input
          type='checkbox'
          value={`${user.id}`}
          onChange={(e) => handleSelectedUsers(e.target.value)}
        />
      </td>
      <td>{user.id}</td>
      <td>{user.last_name}</td>
      <td>{user.first_name}</td>
      <td> {user.email}</td>
      <td> {sliceAvatar(user.avatar)}</td>
    </tr>
  ));
};

export default TableBody;
