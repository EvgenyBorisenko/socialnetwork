import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './Components/Header/Header';
import UserNavigation from './Components/UserNavigation/UserNavigation';
import MainContent from './Components/MainContent/MainContent';
import Messages from './Components/Messages/Messages';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <Header />
        <div className={s.AppContainer}>
          <UserNavigation />

          <Route path="/Profile" component={MainContent} />
          <Route path="/Messages" component={Messages} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
