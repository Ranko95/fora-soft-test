import React from 'react';
import Room from '../Room/Room';
import SidePanelHead from '../SidePanelHead/SidePanelHead';
import { useDispatch } from 'react-redux';
import './RoomsPanel.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import roomsIcon from '../../images/message.png';
import { addRoomAC } from '../../redux/action-creator';

const rooms = ['room1', 'room2', 'room3', 'room4', 'room5', 'room6', 'room7', 'room8', 'room9', 'room10', 'room11', 'room12', 'room13', 'room14', 'room15', 'room16'];

function RoomsPanel() {

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.textContent)
    dispatch(addRoomAC(e.target.textContent));
  }

  return (
    <div className="rooms-panel">
      <div className="head">
        <SidePanelHead icon={roomsIcon} name="Rooms" />
      </div>
      {
        rooms.map(room => {
          const id = uuidv4();
          return (
            <div className="rooms-panel__room">
              <Link to={`/chat/${id}`} onClick={handleClick}>
                <Room key={id} title={room} />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default RoomsPanel;
