import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Modal.css';
import { addRoomAC } from '../../redux/action-creator';

function Modal() {

  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRoomAC(name));
  }

  const handleChange = (e) => {
    const { target } = e;
    setName(target.value);
  }

  return (
    <div className="modal">
      <form className="modal__form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your room name..." value={name} onChange={handleChange} required />
        <button type="submit">Create</button>
        {/* <button type="submit">Cancel</button> */}
      </form>
    </div>
  )
}

export default Modal;
