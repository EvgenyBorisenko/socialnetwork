import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './UserNavigation.module.css';

const UserNavigation = () => {
  return (
    <div>
      <ul className={s.UserNavigation}>
        <NavLink to="Profile">Profile</NavLink>
        <NavLink to="Messages">Messages</NavLink>
        <NavLink to="News">News</NavLink>
        <NavLink to="Music">Music</NavLink>
        <NavLink to="Settings">Settings</NavLink>
      </ul>
    </div>
  );
};

export default UserNavigation;
