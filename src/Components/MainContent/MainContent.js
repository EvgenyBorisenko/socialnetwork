/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import BackGroundUserImage from '../Profile/BackGroundUserImage/BackGroundUserImage';
import UserAvatar from '../Profile/UserAvatar/UserAvatar';
import About from '../Profile/About/About';
import MyPosts from '../Profile/MyPosts/MyPosts';
import s from './MainContent.module.css';

class MainContent extends Component {
  state = {};

  render() {
    return (
      <div>
        <BackGroundUserImage />
        <div className={s.userContent}>
          <div className={s.leftContentBox}>
            <UserAvatar />
          </div>
          <div className={s.rightContentBox}>
            <About />
            <MyPosts />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
