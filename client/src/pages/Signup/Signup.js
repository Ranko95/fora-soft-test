import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNewUserAC } from '../../redux/action-creator';
import Error from '../../components/Error/Error';

function Signup(props) {
  const [form, setForm] = useState({
    name: '',
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
    const { name, email, password } = form;
    const fetchUser = fetchNewUserAC(name, email, password);
    await fetchUser(dispatch);
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
      <h1>Sign Up</h1>
      {
        error
          ? <div className="form-container__error"><Error error={error} /></div>
          : null
      }
      <form className="form-container__form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter your name..." value={form.name} onChange={handleChange} required />
        <input type="text" name="email" placeholder="Enter your email..." value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter your password..." value={form.password} onChange={handleChange} required />
        <button type="submit">SIGN UP</button>
      </form>
      <div className="form-container__link">
        <span>Already have an account? <Link to="/join">Join</Link></span>
      </div>
    </div>
  )
}

export default Signup;
