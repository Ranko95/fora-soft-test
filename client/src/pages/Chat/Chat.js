import React from 'react';
import './Chat.css';
import { useSelector } from 'react-redux';
import RoomsPanel from '../../components/RoomsPanel/RoomsPanel';
import UsersPanel from '../../components/UsersPanel/UsersPanel';
import Greetings from '../../components/Greetings/Greetings';
import Messanger from '../../components/Messanger/Messanger';

function Chat() {

  const { room, user } = useSelector(state => state);

  return (
    <div className="chat">
      <div className="chat__side-panel">
      {
          room
            ? <UsersPanel />
            : <RoomsPanel />
        }
      </div>
      <div className="chat__main">
        {
          room
            ? <Messanger />
            : <Greetings user={user} />
        }
      </div>
    </div>
  )
}

export default Chat;
