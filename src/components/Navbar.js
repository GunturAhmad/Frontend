import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  // State untuk mengatur status login (misalnya, dari context atau props)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Fungsi untuk handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Update status login
    // Tambahkan logika untuk logout pengguna, misalnya hapus token, dll.
    navigate('/'); // Redirect ke halaman utama
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ fontFamily: 'Sen Extrabold', letterSpacing: '1px' }}>TISHISAKURA</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/paket">PAKET</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booking">BOOKING</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Other
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/contact">CONTACT</Link></li>
                <li><Link className="dropdown-item" to="/about">ABOUT</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex me-3" onSubmit={handleSearchSubmit}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
              value={searchQuery} 
              onChange={handleSearchChange} 
            />
          </form>
          
          {/* Tombol Login, Register, atau Logout */}
          <div className="d-flex">
            {isLoggedIn ? (
              <>
                <button className="btn btn-outline-light me-2" onClick={handleLogout}>Logout</button>
                <Link className="btn btn-outline-light" to="/dashboard">Dashboard</Link>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
                <Link className="btn btn-outline-light" to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
