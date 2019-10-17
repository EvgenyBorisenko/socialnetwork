import React, { Component } from 'react';
import s from './Header.module.css';

class Header extends Component {
  state = {};

  render() {
    return (
      <div className={s.header}>
        <div className={s.headerNav}>
          <h1 className={s.logo}>TextMe</h1>
          <div className={s.login}>Login</div>
        </div>
      </div>
    );
  }
}

export default Header;
