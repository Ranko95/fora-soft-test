import React from 'react';
import './Greetings.css';

function Greetings({ user }) {
  return (
    <div className="greet">
      <h1>Welcome to the Chatime, {user}!</h1>
      <p>Join a room or create your own.</p>
      <button className="greet_btn">Create a room</button>
    </div>
  )
}

export default Greetings;
