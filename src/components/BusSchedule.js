import React, { useState } from 'react';

function Schedule() {
  const [departureTimeFilter, setDepartureTimeFilter] = useState('');
  const [departureRouteFilter, setDepartureRouteFilter] = useState('');
  const [arrivalRouteFilter, setArrivalRouteFilter] = useState('');
  const [transportTypeFilter, setTransportTypeFilter] = useState('');

  const schedules = [
    { departure: '06:00', route: 'Jakarta - Bandung', transport: 'Bus' },
    { departure: '06:15', route: 'Surabaya - Malang', transport: 'Kereta Api' },
    { departure: '06:30', route: 'Bali - Jakarta', transport: 'Pesawat' },
    { departure: '06:45', route: 'Batam - Singapura', transport: 'Kapal' },
    { departure: '07:00', route: 'Bandung - Jakarta', transport: 'Mobil' },
    { departure: '07:15', route: 'Jakarta - Semarang', transport: 'Bus' },
    { departure: '07:30', route: 'Yogyakarta - Jakarta', transport: 'Kereta Api' },
    { departure: '07:45', route: 'Denpasar - Surabaya', transport: 'Pesawat' },
    { departure: '08:00', route: 'Malang - Surabaya', transport: 'Mobil' },
    { departure: '08:15', route: 'Jakarta - Medan', transport: 'Pesawat' },
    { departure: '08:30', route: 'Makassar - Bali', transport: 'Kapal' },
    { departure: '08:45', route: 'Semarang - Bandung', transport: 'Bus' },
    { departure: '09:00', route: 'Surabaya - Jakarta', transport: 'Kereta Api' },
    { departure: '09:15', route: 'Palembang - Jakarta', transport: 'Pesawat' },
    { departure: '09:30', route: 'Batam - Jakarta', transport: 'Kapal' },
    { departure: '09:45', route: 'Jakarta - Bali', transport: 'Mobil' },
    { departure: '10:00', route: 'Jakarta - Banjarmasin', transport: 'Pesawat' },
    { departure: '10:15', route: 'Yogyakarta - Semarang', transport: 'Bus' },
    { departure: '10:30', route: 'Jakarta - Surabaya', transport: 'Kereta Api' },
    { departure: '10:45', route: 'Bali - Medan', transport: 'Pesawat' },
    { departure: '11:00', route: 'Bandung - Semarang', transport: 'Kapal' },
    { departure: '11:15', route: 'Medan - Bali', transport: 'Mobil' },
    { departure: '11:30', route: 'Palembang - Surabaya', transport: 'Bus' },
    { departure: '11:45', route: 'Banjarmasin - Jakarta', transport: 'Kereta Api' },
    { departure: '12:00', route: 'Jakarta - Balikpapan', transport: 'Pesawat' },
    { departure: '12:15', route: 'Makassar - Jakarta', transport: 'Kapal' },
    { departure: '12:30', route: 'Jakarta - Surabaya', transport: 'Mobil' },
    { departure: '12:45', route: 'Bali - Jakarta', transport: 'Pesawat' },
    { departure: '13:00', route: 'Semarang - Yogyakarta', transport: 'Bus' },
    { departure: '13:15', route: 'Batam - Bali', transport: 'Kereta Api' },
    { departure: '13:30', route: 'Medan - Jakarta', transport: 'Pesawat' },
    { departure: '13:45', route: 'Banjarmasin - Surabaya', transport: 'Mobil' },
    { departure: '14:00', route: 'Jakarta - Malang', transport: 'Kapal' },
    { departure: '14:15', route: 'Bali - Surabaya', transport: 'Bus' },
    { departure: '14:30', route: 'Surabaya - Jakarta', transport: 'Kereta Api' },
    { departure: '14:45', route: 'Jakarta - Palembang', transport: 'Pesawat' },
    { departure: '15:00', route: 'Yogyakarta - Medan', transport: 'Mobil' },
    { departure: '15:15', route: 'Bandung - Bali', transport: 'Kapal' },
    { departure: '15:30', route: 'Jakarta - Banjarmasin', transport: 'Bus' },
    { departure: '15:45', route: 'Jakarta - Bandung', transport: 'Kereta Api' },
    { departure: '16:00', route: 'Semarang - Jakarta', transport: 'Pesawat' },
    { departure: '16:15', route: 'Batam - Jakarta', transport: 'Mobil' },
    { departure: '16:30', route: 'Malang - Bali', transport: 'Kapal' },
    { departure: '16:45', route: 'Surabaya - Yogyakarta', transport: 'Bus' },
    { departure: '17:00', route: 'Jakarta - Bali', transport: 'Pesawat' },
    { departure: '17:15', route: 'Bali - Jakarta', transport: 'Kereta Api' },
    { departure: '17:30', route: 'Jakarta - Makassar', transport: 'Mobil' },
    { departure: '17:45', route: 'Jakarta - Medan', transport: 'Kapal' },
    { departure: '18:00', route: 'Surabaya - Bandung', transport: 'Bus' },
    { departure: '18:15', route: 'Bandung - Yogyakarta', transport: 'Pesawat' },
    { departure: '18:30', route: 'Jakarta - Palembang', transport: 'Kereta Api' },
    { departure: '18:45', route: 'Bali - Surabaya', transport: 'Mobil' },
    { departure: '19:00', route: 'Makassar - Jakarta', transport: 'Kapal' },
    { departure: '19:15', route: 'Batam - Bandung', transport: 'Bus' },
    { departure: '19:30', route: 'Surabaya - Jakarta', transport: 'Pesawat' },
    { departure: '19:45', route: 'Jakarta - Banjarmasin', transport: 'Mobil' },
    { departure: '20:00', route: 'Medan - Bali', transport: 'Kereta Api' },
    { departure: '20:15', route: 'Bandung - Jakarta', transport: 'Kapal' },
    { departure: '20:30', route: 'Jakarta - Malang', transport: 'Bus' },
    { departure: '20:45', route: 'Bali - Jakarta', transport: 'Pesawat' },
    { departure: '21:00', route: 'Yogyakarta - Surabaya', transport: 'Mobil' },
    { departure: '21:15', route: 'Jakarta - Batam', transport: 'Kapal' },
    { departure: '21:30', route: 'Semarang - Bali', transport: 'Bus' },
    { departure: '21:45', route: 'Surabaya - Jakarta', transport: 'Kereta Api' },
    { departure: '22:00', route: 'Malang - Medan', transport: 'Pesawat' },
    { departure: '22:15', route: 'Jakarta - Yogyakarta', transport: 'Mobil' },
    { departure: '22:30', route: 'Bandung - Bali', transport: 'Kapal' },
    { departure: '22:45', route: 'Jakarta - Batam', transport: 'Bus' },
    { departure: '23:00', route: 'Surabaya - Malang', transport: 'Kereta Api' },
    { departure: '23:15', route: 'Medan - Jakarta', transport: 'Pesawat' },
    { departure: '23:30', route: 'Bali - Bandung', transport: 'Mobil' },
    { departure: '23:45', route: 'Jakarta - Bali', transport: 'Kapal' },
    { departure: '00:00', route: 'Jakarta - Manado', transport: 'Pesawat' },
    { departure: '00:15', route: 'Bali - Jakarta', transport: 'Bus' },
    { departure: '00:30', route: 'Bandung - Surabaya', transport: 'Kereta Api' },
    { departure: '00:45', route: 'Yogyakarta - Jakarta', transport: 'Mobil' },
    { departure: '01:00', route: 'Palembang - Medan', transport: 'Kapal' },
    { departure: '01:15', route: 'Jakarta - Malang', transport: 'Pesawat' },
    { departure: '01:30', route: 'Bali - Batam', transport: 'Bus' },
    { departure: '01:45', route: 'Surabaya - Makassar', transport: 'Kereta Api' },
    { departure: '02:00', route: 'Jakarta - Bandung', transport: 'Mobil' },
    { departure: '02:15', route: 'Medan - Bali', transport: 'Kapal' },
    { departure: '02:30', route: 'Banjarmasin - Jakarta', transport: 'Pesawat' },
    { departure: '02:45', route: 'Batam - Yogyakarta', transport: 'Bus' },
    { departure: '03:00', route: 'Jakarta - Semarang', transport: 'Kereta Api' },
    { departure: '03:15', route: 'Bali - Medan', transport: 'Mobil' },
    { departure: '03:30', route: 'Surabaya - Jakarta', transport: 'Kapal' },
    { departure: '03:45', route: 'Jakarta - Palembang', transport: 'Pesawat' },
    { departure: '04:00', route: 'Bandung - Jakarta', transport: 'Bus' },
    { departure: '04:15', route: 'Yogyakarta - Bali', transport: 'Kereta Api' },
    { departure: '04:30', route: 'Jakarta - Makassar', transport: 'Mobil' },
    { departure: '04:45', route: 'Medan - Batam', transport: 'Kapal' },
    { departure: '05:00', route: 'Palembang - Jakarta', transport: 'Pesawat' },
    { departure: '05:15', route: 'Jakarta - Malang', transport: 'Bus' },
    { departure: '05:30', route: 'Bali - Jakarta', transport: 'Kereta Api' },
    { departure: '05:45', route: 'Surabaya - Bandung', transport: 'Mobil' },
    { departure: '06:00', route: 'Jakarta - Semarang', transport: 'Kapal' },
    { departure: '06:15', route: 'Banjarmasin - Medan', transport: 'Pesawat' },
    { departure: '06:30', route: 'Yogyakarta - Jakarta', transport: 'Bus' },
    { departure: '06:45', route: 'Batam - Bali', transport: 'Kereta Api' },
    { departure: '07:00', route: 'Jakarta - Palembang', transport: 'Mobil' },
    { departure: '07:15', route: 'Bali - Jakarta', transport: 'Kapal' },
    { departure: '07:30', route: 'Surabaya - Jakarta', transport: 'Pesawat' },
    { departure: '07:45', route: 'Medan - Bali', transport: 'Bus' },
    { departure: '08:00', route: 'Palembang - Jakarta', transport: 'Kereta Api' },
    { departure: '08:15', route: 'Jakarta - Banjarmasin', transport: 'Mobil' },
    { departure: '08:30', route: 'Bali - Surabaya', transport: 'Kapal' },
    { departure: '08:45', route: 'Jakarta - Malang', transport: 'Pesawat' },
    { departure: '09:00', route: 'Yogyakarta - Jakarta', transport: 'Bus' },
    { departure: '09:15', route: 'Batam - Jakarta', transport: 'Kereta Api' },
    { departure: '09:30', route: 'Jakarta - Bali', transport: 'Mobil' },
    { departure: '09:45', route: 'Surabaya - Bandung', transport: 'Kapal' },
    { departure: '10:00', route: 'Jakarta - Semarang', transport: 'Pesawat' },
    { departure: '10:15', route: 'Banjarmasin - Jakarta', transport: 'Bus' },
    { departure: '10:30', route: 'Yogyakarta - Bali', transport: 'Kereta Api' },
    { departure: '10:45', route: 'Jakarta - Malang', transport: 'Mobil' },
    { departure: '11:00', route: 'Palembang - Surabaya', transport: 'Kapal' },
    { departure: '11:15', route: 'Bali - Jakarta', transport: 'Pesawat' },
    { departure: '11:30', route: 'Surabaya - Jakarta', transport: 'Bus' },
    { departure: '11:45', route: 'Medan - Bali', transport: 'Kereta Api' },
    { departure: '12:00', route: 'Jakarta - Banjarmasin', transport: 'Mobil' },
    { departure: '12:15', route: 'Batam - Jakarta', transport: 'Kapal' },
    { departure: '12:30', route: 'Yogyakarta - Jakarta', transport: 'Pesawat' },
    { departure: '12:45', route: 'Jakarta - Bali', transport: 'Bus' },
    { departure: '13:00', route: 'Surabaya - Malang', transport: 'Kereta Api' },
    { departure: '13:15', route: 'Banjarmasin - Jakarta', transport: 'Mobil' },
    { departure: '13:30', route: 'Jakarta - Semarang', transport: 'Kapal' },
    { departure: '13:45', route: 'Medan - Bali', transport: 'Pesawat' },
    { departure: '14:00', route: 'Jakarta - Yogyakarta', transport: 'Bus' },
    { departure: '14:15', route: 'Bali - Jakarta', transport: 'Kereta Api' },
    { departure: '14:30', route: 'Surabaya - Jakarta', transport: 'Mobil' },
    { departure: '14:45', route: 'Palembang - Jakarta', transport: 'Kapal' },
    { departure: '15:00', route: 'Jakarta - Malang', transport: 'Pesawat' },
    { departure: '15:15', route: 'Batam - Jakarta', transport: 'Bus' },
    { departure: '15:30', route: 'Yogyakarta - Bali', transport: 'Kereta Api' },
    { departure: '15:45', route: 'Jakarta - Banjarmasin', transport: 'Mobil' },
    { departure: '16:00', route: 'Bali - Jakarta', transport: 'Kapal' },
    { departure: '16:15', route: 'Surabaya - Jakarta', transport: 'Pesawat' },
    { departure: '16:30', route: 'Medan - Bali', transport: 'Bus' },
    { departure: '16:45', route: 'Jakarta - Semarang', transport: 'Kereta Api' },
    { departure: '17:00', route: 'Banjarmasin - Jakarta', transport: 'Mobil' },
    { departure: '17:15', route: 'Jakarta - Yogyakarta', transport: 'Kapal' },
    { departure: '17:30', route: 'Surabaya - Malang', transport: 'Pesawat' },
    { departure: '17:45', route: 'Jakarta - Bali', transport: 'Bus' },
    { departure: '18:00', route: 'Palembang - Jakarta', transport: 'Kereta Api' },
    { departure: '18:15', route: 'Bali - Jakarta', transport: 'Mobil' },
    { departure: '18:30', route: 'Jakarta - Banjarmasin', transport: 'Kapal' },
    { departure: '18:45', route: 'Yogyakarta - Bali', transport: 'Pesawat' },
    { departure: '19:00', route: 'Surabaya - Jakarta', transport: 'Bus' },
    { departure: '19:15', route: 'Medan - Bali', transport: 'Kereta Api' },
    { departure: '19:30', route: 'Jakarta - Malang', transport: 'Mobil' },
    { departure: '19:45', route: 'Batam - Jakarta', transport: 'Kapal' },
    { departure: '20:00', route: 'Palembang - Jakarta', transport: 'Pesawat' },
    { departure: '20:15', route: 'Jakarta - Yogyakarta', transport: 'Bus' },
    { departure: '20:30', route: 'Bali - Jakarta', transport: 'Kereta Api' },
    { departure: '20:45', route: 'Surabaya - Jakarta', transport: 'Mobil' },
    { departure: '21:00', route: 'Medan - Bali', transport: 'Kapal' },
    { departure: '21:15', route: 'Banjarmasin - Jakarta', transport: 'Pesawat' },
    { departure: '21:30', route: 'Jakarta - Banjarmasin', transport: 'Bus' },
    { departure: '21:45', route: 'Yogyakarta - Jakarta', transport: 'Kereta Api' },
    { departure: '22:00', route: 'Jakarta - Malang', transport: 'Mobil' },
    { departure: '22:15', route: 'Surabaya - Jakarta', transport: 'Kapal' },
    { departure: '22:30', route: 'Palembang - Jakarta', transport: 'Pesawat' },
    { departure: '22:45', route: 'Batam - Bali', transport: 'Bus' },
    { departure: '23:00', route: 'Jakarta - Yogyakarta', transport: 'Kereta Api' },
    { departure: '23:15', route: 'Medan - Bali', transport: 'Mobil' },
    { departure: '23:30', route: 'Bali - Jakarta', transport: 'Kapal' },
    { departure: '23:45', route: 'Surabaya - Jakarta', transport: 'Pesawat' },
];

  const handleDepartureTimeFilter = (event) => {
    setDepartureTimeFilter(event.target.value);
  };

  const handleDepartureRouteFilter = (event) => {
    setDepartureRouteFilter(event.target.value);
  };

  const handleArrivalRouteFilter = (event) => {
    setArrivalRouteFilter(event.target.value);
  };

  const handleTransportTypeFilter = (event) => {
    setTransportTypeFilter(event.target.value);
  };

  const filteredSchedules = schedules.filter((schedule) => {
    const [departureCity, arrivalCity] = schedule.route.split(' - ');
    const matchesDepartureTime = departureTimeFilter ? schedule.departure.includes(departureTimeFilter) : true;
    const matchesDepartureRoute = departureRouteFilter ? departureCity.toLowerCase().includes(departureRouteFilter.toLowerCase()) : true;
    const matchesArrivalRoute = arrivalRouteFilter ? arrivalCity.toLowerCase().includes(arrivalRouteFilter.toLowerCase()) : true;
    const matchesTransportType = transportTypeFilter ? schedule.transport.toLowerCase().includes(transportTypeFilter.toLowerCase()) : true;
    return matchesDepartureTime && matchesDepartureRoute && matchesArrivalRoute && matchesTransportType;
  });

  return (
    <div className="container-fluid text-light">
      <h1>Jadwal Keberangkatan Transportasi</h1>

      {/* Filter berdasarkan waktu keberangkatan */}
      <input
        type="text"
        placeholder="Masukkan waktu keberangkatan..."
        value={departureTimeFilter}
        onChange={handleDepartureTimeFilter}
        className="form-control mb-3"
      />

      {/* Filter berdasarkan rute keberangkatan */}
      <input
        type="text"
        placeholder="Masukkan kota keberangkatan..."
        value={departureRouteFilter}
        onChange={handleDepartureRouteFilter}
        className="form-control mb-3"
      />

      {/* Filter berdasarkan rute tujuan */}
      <input
        type="text"
        placeholder="Masukkan kota tujuan..."
        value={arrivalRouteFilter}
        onChange={handleArrivalRouteFilter}
        className="form-control mb-3"
      />

      {/* Filter berdasarkan jenis transportasi */}
      <select
        value={transportTypeFilter}
        onChange={handleTransportTypeFilter}
        className="form-control mb-3"
      >
        <option value="">Semua Transportasi</option>
        <option value="Bus">Bus</option>
        <option value="Kereta Api">Kereta Api</option>
        <option value="Pesawat">Pesawat</option>
        <option value="Kapal">Kapal</option>
        <option value="Mobil">Mobil</option>
      </select>

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Waktu Keberangkatan</th>
            <th>Rute</th>
            <th>Jenis Transportasi</th>
          </tr>
        </thead>
        <tbody>
          {filteredSchedules.length > 0 ? (
            filteredSchedules.map((schedule, index) => (
              <tr key={index}>
                <td>{schedule.departure}</td>
                <td>{schedule.route}</td>
                <td>{schedule.transport}</td>
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

export default Schedule;
