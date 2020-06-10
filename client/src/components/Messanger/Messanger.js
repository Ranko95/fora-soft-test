import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Messanger.css';
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';
import JoinRoom from '../JoinRoom/JoinRoom';
import Message from '../Message/Message';
import { fetchSendMessageAC } from '../../redux/action-creator';
// import sendIcon from '../../images/send.png';

let socket;

function Messanger() {

  const [text, setText] = useState('');

  const ENDPOINT = 'localhost:5000';

  const { room, user } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(room.messages);
    socket = io(ENDPOINT);

    socket.emit('join', {  });
    return () => {
      socket.emit('disconnect', socket.id);
      socket.close();
    }
  }, [ENDPOINT])

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      return
    } else {
      const fetchSendMessage = fetchSendMessageAC(user, room._id, text);
      setText('');
      await fetchSendMessage(dispatch);
    }
  }

  return (
    <div className="messanger">
      <ScrollToBottom className="messanger__text-field">
        {
          room.messages.length
            ? room.messages.map(message => {
              return (
                <div className={"messanger__mesage-container " + (message.user._id === user._id ? "right" : null)}>
                  <Message key={message._id} name={message.user.name} text={message.text} date={message.date} />
                </div>
              )
            })
            : null
        }
      </ScrollToBottom>
      <div className="messanger__input-field">
        {
          room.users.find(el => el._id === user._id)
            ? <form className="messanger__form" onSubmit={handleSubmit}>
                <input className="messanger__input" type="text" placeholder="Type your message..." onChange={handleChange} value={text} required />
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
