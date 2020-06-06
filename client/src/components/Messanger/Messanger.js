import React from 'react';
import './Messanger.css';
// import sendIcon from '../../images/send.png';

function Messanger() {

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
