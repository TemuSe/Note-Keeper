import React, { useState } from 'react';
import "./RegLog.css";

function Register({onRegister}) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill in all the fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(formData.password)) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.username === formData.username);

    
    if (existingUser) {
      setError('Username already exists');
      return;
    }

    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    onRegister();

  };

  return (

    <div className="register-container">
      <h2 className='reg-h'>Register</h2>
      <p className="error-message">{error}</p>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>

    </div>
  );
};

export default Register;
