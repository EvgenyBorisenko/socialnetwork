import React, { Component } from 'react';
import AddPost from '../AddPost/AddPost';
import Post from '../Post/Post';

class MyPosts extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {};

  render() {
    return (
      <div>
        <AddPost />
        <Post message="Hi it`s my first post " />
        <Post message=" How are you ?" />
      </div>
    );
  }
}

export default MyPosts;
