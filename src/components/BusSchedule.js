import React from 'react';

function BusSchedule() {
  return (
    <div className="container-fluid text-light">
      <h1>Jadwal Keberangkatan dan Kedatangan Bus</h1>
      <p>Kode Booking: BUS12345</p>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Waktu Keberangkatan</th>
            <th>Waktu Kedatangan</th>
            <th>Rute</th>
          </tr>
        </thead>
        <tbody>
          {/* Indonesia */}
          <tr>
            <td>08:00</td>
            <td>12:00</td>
            <td>Jakarta - Bandung</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>14:00</td>
            <td>Surabaya - Malang</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>16:00</td>
            <td>Yogyakarta - Semarang</td>
          </tr>
          <tr>
            <td>14:00</td>
            <td>18:00</td>
            <td>Denpasar - Gilimanuk</td>
          </tr>
          <tr>
            <td>16:00</td>
            <td>20:00</td>
            <td>Medan - Berastagi</td>
          </tr>
          {/* Singapore */}
          <tr>
            <td>07:00</td>
            <td>09:00</td>
            <td>Singapore - Johor Bahru</td>
          </tr>
          <tr>
            <td>09:00</td>
            <td>11:00</td>
            <td>Singapore - Kuala Lumpur</td>
          </tr>
          <tr>
            <td>11:00</td>
            <td>13:00</td>
            <td>Singapore - Malacca</td>
          </tr>
          <tr>
            <td>13:00</td>
            <td>15:00</td>
            <td>Singapore - Penang</td>
          </tr>
          <tr>
            <td>15:00</td>
            <td>17:00</td>
            <td>Singapore - Genting Highlands</td>
          </tr>
          {/* Japan */}
          <tr>
            <td>08:00</td>
            <td>10:00</td>
            <td>Tokyo - Yokohama</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>12:00</td>
            <td>Osaka - Kyoto</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>14:00</td>
            <td>Fukuoka - Nagasaki</td>
          </tr>
          <tr>
            <td>14:00</td>
            <td>16:00</td>
            <td>Sapporo - Otaru</td>
          </tr>
          <tr>
            <td>16:00</td>
            <td>18:00</td>
            <td>Hiroshima - Okayama</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BusSchedule;
