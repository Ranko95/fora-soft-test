import React from 'react';
import { useSelector } from 'react-redux';
import usersIcon from '../../images/group.png';
import SidePanelHead from '../SidePanelHead/SidePanelHead';
import './UsersPanel.css';

// const users = ['John', 'Chriss', 'Anna', 'Lena', 'Ben', 'Muhhamad', 'Anon12', 'Ivan', 'Anastasia', 'Lol', 'Peter', 'George', 'Hea', 'Kitti94', 'Sergei', 'Mikkey'];

function UsersPanel() {

  const { users } = useSelector(state => state.room);

  return (
    <div className="users-panel">
      <div className="head">
        <SidePanelHead icon={usersIcon} name="Users" />
      </div>
    {
      users.length
        ? users.map((user) => {
            return (
              <div className="users-panel__user" key={user._id}>
                <span>{user.name}</span>
              </div>
            )
          })
        : null
    }
  </div>
  )
}

export default UsersPanel;
