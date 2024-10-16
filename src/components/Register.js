import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    // Validasi panjang username dan password minimal 8 karakter
    
    if (password.length < 8) {
      alert('Password harus memiliki minimal 8 karakter.');
      return;
    }

    // Jika validasi berhasil, lanjutkan proses registrasi
    if (username.trim() && password.trim()) {
      alert('Registration successful!');
      navigate('/login'); // Navigasi ke halaman Home setelah registrasi
    } else {
      alert('Please fill in both username and password.');
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
