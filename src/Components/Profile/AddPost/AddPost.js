import React from 'react';
import s from './AddPost.module.css';

const AddPost = () => {
  return (
    <div className={s.addPost}>
      <span> My Posts</span>
      <textarea name="" id="" cols="30" rows="10" />
      <button type="submit">Add Post</button>
    </div>
  );
};

export default AddPost;
