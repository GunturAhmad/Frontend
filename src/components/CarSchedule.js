import React, { useState } from 'react';

function CarSchedule() {
  // State untuk menyimpan input pencarian
  const [searchTerm, setSearchTerm] = useState('');

  // Data jadwal mobil
  const carSchedules = [
    { departure: '09:00', arrival: '11:00', route: 'Jakarta - Bogor' },
    { departure: '11:00', arrival: '13:00', route: 'Surabaya - Sidoarjo' },
    { departure: '13:00', arrival: '15:00', route: 'Bandung - Lembang' },
    { departure: '15:00', arrival: '17:00', route: 'Denpasar - Ubud' },
    { departure: '17:00', arrival: '19:00', route: 'Medan - Binjai' },
    { departure: '08:00', arrival: '09:00', route: 'Singapore - Sentosa Island' },
    { departure: '09:00', arrival: '10:00', route: 'Singapore - Marina Bay Sands' },
    { departure: '10:00', arrival: '11:00', route: 'Singapore - Orchard Road' },
    { departure: '11:00', arrival: '12:00', route: 'Singapore - Jurong Bird Park' },
    { departure: '12:00', arrival: '13:00', route: 'Singapore - Singapore Zoo' },
    { departure: '07:00', arrival: '09:00', route: 'Tokyo - Mount Fuji' },
    { departure: '09:00', arrival: '11:00', route: 'Osaka - Nara' },
    { departure: '11:00', arrival: '13:00', route: 'Kyoto - Arashiyama' },
    { departure: '13:00', arrival: '15:00', route: 'Sapporo - Furano' },
    { departure: '15:00', arrival: '17:00', route: 'Hiroshima - Miyajima' },
  ];

  // Fungsi untuk menangani pencarian
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter jadwal berdasarkan input pencarian (waktu atau nama rute)
  const filteredSchedules = carSchedules.filter(
    (schedule) =>
      schedule.departure.includes(searchTerm) ||
      schedule.arrival.includes(searchTerm) ||
      schedule.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid text-light">
      <h1>Jadwal Keberangkatan dan Kedatangan Mobil</h1>
      <p>Kode Booking: CAR12345</p>

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

export default CarSchedule;
