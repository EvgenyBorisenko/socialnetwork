import React from 'react';
import avatar from '../UserAvatar/user-avatar.jpg';
import s from './Post.module.css';

const Post = props => {
  return (
    <div>
      <img className={s.postAvatar} src={avatar} alt="ava" />
      <p> {props.message}</p>
    </div>
  );
};

export default Post;
