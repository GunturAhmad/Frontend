import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paket from './components/Paket';
import Booking from './components/Booking';
import Contact from './components/Contact';
import About from './components/About';
import SearchResults from './components/SearchResults';
import BusSchedule from './components/BusSchedule';
import CarSchedule from './components/CarSchedule';
import DriverGuideProfile from './components/DriverGuideProfile';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paket" element={<Paket />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/bus-schedule" element={<BusSchedule />} />
        <Route path="/car-schedule" element={<CarSchedule />} />
        <Route path="/driver-guide-profile" element={<DriverGuideProfile />} />
        
        {/* Tambahkan Route untuk Login, Register, dan Dashboard */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
