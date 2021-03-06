import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginAC } from '../../redux/action-creator';
import Error from '../../components/Error/Error';

function Join(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  
  const { user, error } = useSelector(state => state);

  useEffect(() => {
    if (user) {
      props.history.push('/');
    }
  }, [user, props.history])


  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    const fetchLogin = fetchLoginAC(email, password);
    await fetchLogin(dispatch);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <div className="form-container">
      <h1>Join</h1>
      {
        error
          ? <div className="form-container__error"><Error error={error} /></div>
          : null
      }
      <form className="form-container__form" onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Enter your email..." value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter your password..." value={form.password} onChange={handleChange} required />
        <button type="submit">CONNECT</button>
      </form>
      <div className="form-container__link">
        <span>Don't have an account? <Link to="/signup">Sign up</Link></span>
      </div>
    </div>
  )
}

export default Join;
