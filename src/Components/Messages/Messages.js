import React from 'react';
import s from './Messages.module.css';

const Messages = () => {
  const dialogs = [
    { id: 'qwerty1', name: 'Alexey' },
    { id: 'qwerty22', name: 'Oleg' },
    { id: 'qwerty31', name: 'Alex' },
    { id: 'qwerty12', name: 'Svetlana' },
    { id: 'qwerty14', name: 'Vladimir' },
    { id: 'qwerty28', name: 'Artem' },
  ];

  const messages = [
    { id: 'qwer1', message: 'Hello dude :)' },
    { id: 'qwe22', message: 'How are you?' },
    { id: 'qwe31', message: 'What are you doing?' },
    { id: 'qwert2', message: 'Do you know java script?' },
    { id: 'qwer4', message: 'yes  i am sure' },
    { id: 'qwe8', message: 'do you have  a girlfriend?' },
  ];

  const userDialog = dialogs.map(dialog => (
    <li key={dialog.id}>{dialog.name}</li>
  ));

  const usersMessages = messages.map(message => (
    <p key={message.id}>{message.message}</p>
  ));

  return (
    <div className={s.messagesBox}>
      <div className={s.dialogs}>
        <ul>{userDialog}</ul>
      </div>
      <div className={s.usersMessages}>{usersMessages}</div>
    </div>
  );
};

export default Messages;
