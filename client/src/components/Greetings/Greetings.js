import React, { useState } from 'react';
import './Greetings.css';
import Modal from '../Modal/Modal';

function Greetings({ user }) {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div className="greet-container">
    {
        show
          ? <div className="greet-container__modal"><Modal /></div>
          : null
      }
    <div className={show ? "greet greet_blur": "greet"}>
      <h1>Welcome to the Chatime, {user}!</h1>
      <p>Join a room or create your own.</p>
      <button className="greet_btn" onClick={handleClick}>Create a room</button>
    </div>
    </div>
  )
}

export default Greetings;
