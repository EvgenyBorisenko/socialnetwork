import React from 'react';
import s from './UserAvatar.module.css';
import userAvatar from './user-avatar.jpg';

const UserAvatar = () => {
  return (
    <div>
      <img className={s.avatar} src={userAvatar} alt="user-avatar" />
    </div>
  );
};

export default UserAvatar;
