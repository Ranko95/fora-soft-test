import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Modal.css';
import { fetchNewRoomAC } from '../../redux/action-creator';

function Modal({handleClick}) {

  const [name, setName] = useState('');

  const { user } = useSelector(state => state);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetchNewRoom = fetchNewRoomAC(name, user._id);
    await fetchNewRoom(dispatch);
  }

  const handleChange = (e) => {
    const { target } = e;
    setName(target.value);
  }

  return (
    <div className="modal">
      <form className="modal__form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your room name..." value={name} onChange={handleChange} required />
        <button className="btn-submit" type="submit">Create</button>
        <button className="btn-cancel" onClick={handleClick}>Cancel</button>
      </form>
    </div>
  )
}

export default Modal;
