import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Tambahkan import untuk file CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Simulasi panggilan API
    const response = await fetch('URL_API_LOGIN', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Redirect ke dashboard atau halaman lain
      navigate('/dashboard');
    } else {
      alert('Login gagal');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label>Usename:</label>
          <input
            type="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
