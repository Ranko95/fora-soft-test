import React from 'react';
import usersIcon from '../../images/group.png';
import SidePanelHead from '../SidePanelHead/SidePanelHead';
import './UsersPanel.css';

const users = ['John', 'Chriss', 'Anna', 'Lena', 'Ben', 'Muhhamad', 'Anon12', 'Ivan', 'Anastasia', 'Lol', 'Peter', 'George', 'Hea', 'Kitti94', 'Sergei', 'Mikkey'];

function UsersPanel() {
  return (
    <div className="users-panel">
      <div className="head">
        <SidePanelHead icon={usersIcon} name="Users" />
      </div>
    {
      users.map((user, i) => {
        return (
          <div className="users-panel__user" key={i}>
            <span>{user}</span>
          </div>
        )
      })
    }
  </div>
  )
}

export default UsersPanel;
