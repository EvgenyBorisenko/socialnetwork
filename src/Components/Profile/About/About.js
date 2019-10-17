/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import s from './About.module.css';

class About extends Component {
  state = {};

  render() {
    return (
      <div className={s.about}>
        <div>
          <h2>Evgeniy Borisenko</h2>
          <input className={s.inputStatus} type="text" placeholder="status" />
          <hr />
          <p>Date of birthday: 22.07.1991</p>
          <p>City: Kiev</p>
          <p>Education : ZNTU </p>
          <hr />
          <div />
        </div>
      </div>
    );
  }
}

export default About;
