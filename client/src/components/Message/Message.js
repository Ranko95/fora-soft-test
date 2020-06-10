import React from 'react';
import './Message.css';

function Message({ name, text, date }) {
  return (
    <div className="message">
      <span>{date}</span>
      <span>{name}</span>
      <p>{text}</p>
    </div>
  )
}

export default Message;
