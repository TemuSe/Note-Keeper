import React, { useState } from 'react';
import "./RegLog.css";

function Login({onLogin, handleNotReg}) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      onLogin();

    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="register-container">
      <h2 className='reg-h'>Login</h2>
      <p className="error-message">{error}</p>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <button onClick={handleNotReg} className='button-not-reg' type="submit">Not Registered?</button>
      </form>
    </div>
  );
}

export default Login;
