import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Messanger.css';
import io from 'socket.io-client';
import JoinRoom from '../JoinRoom/JoinRoom';
// import sendIcon from '../../images/send.png';

let socket;

function Messanger() {

  const ENDPOINT = 'localhost:5000';

  const { room, user } = useSelector(state => state);

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('join', {  });
    return () => {
      socket.emit('disconnect', socket.id);
      socket.close();
    }
  }, [ENDPOINT])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="messanger">
      <div className="messanger__text-field"></div>
      <div className="messanger__input-field">
        {
          room.users.find(el => el._id === user._id)
            ? <form className="messanger__form" onSubmit={handleSubmit}>
                <input className="messanger__input" type="text" placeholder="Type your message..." />
                <button className="messanger__btn" type="submit">
                {/* <img src={sendIcon} alt="send" /> */}
                Send
                </button>
              </form>
            : <JoinRoom />
        }
      </div>
    </div>
  )
}

export default Messanger;
