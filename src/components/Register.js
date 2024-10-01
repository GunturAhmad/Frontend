import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error during registration');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h1>Register</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
