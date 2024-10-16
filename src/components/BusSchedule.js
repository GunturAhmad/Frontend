import React, { useState } from 'react';

function BusSchedule() {
  // State untuk menyimpan input pencarian
  const [searchTerm, setSearchTerm] = useState('');

  // Data jadwal bus
  const busSchedules = [
    { departure: '08:00', arrival: '12:00', route: 'Jakarta - Bandung' },
    { departure: '10:00', arrival: '14:00', route: 'Surabaya - Malang' },
    { departure: '12:00', arrival: '16:00', route: 'Yogyakarta - Semarang' },
    { departure: '14:00', arrival: '18:00', route: 'Denpasar - Gilimanuk' },
    { departure: '16:00', arrival: '20:00', route: 'Medan - Berastagi' },
    { departure: '07:00', arrival: '09:00', route: 'Singapore - Johor Bahru' },
    { departure: '09:00', arrival: '11:00', route: 'Singapore - Kuala Lumpur' },
    { departure: '11:00', arrival: '13:00', route: 'Singapore - Malacca' },
    { departure: '13:00', arrival: '15:00', route: 'Singapore - Penang' },
    { departure: '15:00', arrival: '17:00', route: 'Singapore - Genting Highlands' },
    { departure: '08:00', arrival: '10:00', route: 'Tokyo - Yokohama' },
    { departure: '10:00', arrival: '12:00', route: 'Osaka - Kyoto' },
    { departure: '12:00', arrival: '14:00', route: 'Fukuoka - Nagasaki' },
    { departure: '14:00', arrival: '16:00', route: 'Sapporo - Otaru' },
    { departure: '16:00', arrival: '18:00', route: 'Hiroshima - Okayama' },
  ];

  // Fungsi untuk menangani pencarian
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter jadwal berdasarkan input pencarian (waktu atau nama tujuan)
  const filteredSchedules = busSchedules.filter(
    (schedule) =>
      schedule.departure.includes(searchTerm) ||
      schedule.arrival.includes(searchTerm) ||
      schedule.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid text-light">
      <h1>Jadwal Keberangkatan dan Kedatangan Bus</h1>
      <p>Kode Booking: BUS12345</p>

      {/* Input pencarian */}
      <input
        type="text"
        placeholder="Cari berdasarkan waktu atau tujuan..."
        value={searchTerm}
        onChange={handleSearch}
        className="form-control mb-3"
      />

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Waktu Keberangkatan</th>
            <th>Waktu Kedatangan</th>
            <th>Rute</th>
          </tr>
        </thead>
        <tbody>
          {filteredSchedules.length > 0 ? (
            filteredSchedules.map((schedule, index) => (
              <tr key={index}>
                <td>{schedule.departure}</td>
                <td>{schedule.arrival}</td>
                <td>{schedule.route}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Tidak ada jadwal yang ditemukan</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BusSchedule;
