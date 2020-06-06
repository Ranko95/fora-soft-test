import React, { useState } from 'react';
import './Join.css';
import { useDispatch } from 'react-redux';
import { addUserAC } from '../../redux/action-creator';

function Join(props) {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserAC(name));
    props.history.push('/chat');
  }

  const handleChange = (e) => {
    const { target } = e;
    setName(target.value);
  }

  return (
    <div className="form-container">
      <h1>Join</h1>
      <form className="form-container__form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name..." value={name} onChange={handleChange} required />
        <button type="submit">Connect</button>
      </form>
    </div>
  )
}

export default Join;
