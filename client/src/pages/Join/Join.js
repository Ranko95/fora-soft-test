import React, { useState } from 'react';
import './Join.css';
import { useDispatch } from 'react-redux';
import { addUserAC } from '../../redux/action-creator';

function Join(props) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserAC(user.name));
    props.history.push('/chat');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  return (
    <div className="form-container">
      <h1>Join</h1>
      <form className="form-container__form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name..." value={user.name} onChange={handleChange} required />
        <input type="text" name="email" placeholder="Enter your email..." value={user.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter your password..." value={user.password} onChange={handleChange} required />
        <button type="submit">Connect</button>
      </form>
    </div>
  )
}

export default Join;
