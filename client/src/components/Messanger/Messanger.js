import React, { useEffect } from 'react';
import './Messanger.css';
import io from 'socket.io-client';
// import sendIcon from '../../images/send.png';

let socket;

function Messanger() {

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('join', {  })

  }, [ENDPOINT]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="messanger">
      <div className="messanger__text-field"></div>
      <div className="messanger__input-field">
        <form className="messanger__form" onSubmit={handleSubmit}>
          <input className="messanger__input" type="text" placeholder="Type your message..." />
          <button className="messanger__btn" type="submit">
            {/* <img src={sendIcon} alt="send" /> */}
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Messanger;
