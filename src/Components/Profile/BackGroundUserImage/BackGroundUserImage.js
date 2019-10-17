import React from 'react';
import s from './BackGroundUserImage.module.css';
import backLogo from './background-logo.jpg';

const BackGroundUserImage = () => {
  return (
    <div>
      <img className={s.bgUserLogo} src={backLogo} alt="bg-logo" />
    </div>
  );
};

export default BackGroundUserImage;
