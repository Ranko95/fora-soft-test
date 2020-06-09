import React from 'react';
import './JoinRoom.css';
import { useSelector, useDispatch } from 'react-redux';
import { disconnectAC, fetchJoinRoomAC } from '../../redux/action-creator';

function JoinRoom() {

  const dispatch = useDispatch();

  const { user, room } = useSelector(state => state);

  const handleClickCancel = () => {
    dispatch(disconnectAC());
  }

  const handleClickJoin = async () => {
    console.log(user._id, room._id)
    const fetchJoinRoom = fetchJoinRoomAC(user, room._id);
    await fetchJoinRoom(dispatch);
  }

  return (
    <div className="join-room">
      <button className="join" onClick={handleClickJoin}>JOIN</button>
      <button className="cancel" onClick={handleClickCancel}>CANCEL</button>
    </div>
  )
}

export default JoinRoom;
