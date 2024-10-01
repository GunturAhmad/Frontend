import React from 'react';

function CarSchedule() {
  return (
    <div className="container-fluid text-light">
      <h1>Jadwal Keberangkatan dan Kedatangan Mobil</h1>
      <p>Kode Booking: CAR12345</p>
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
            <td>09:00</td>
            <td>11:00</td>
            <td>Jakarta - Bogor</td>
          </tr>
          <tr>
            <td>11:00</td>
            <td>13:00</td>
            <td>Surabaya - Sidoarjo</td>
          </tr>
          <tr>
            <td>13:00</td>
            <td>15:00</td>
            <td>Bandung - Lembang</td>
          </tr>
          <tr>
            <td>15:00</td>
            <td>17:00</td>
            <td>Denpasar - Ubud</td>
          </tr>
          <tr>
            <td>17:00</td>
            <td>19:00</td>
            <td>Medan - Binjai</td>
          </tr>
          {/* Singapore */}
          <tr>
            <td>08:00</td>
            <td>09:00</td>
            <td>Singapore - Sentosa Island</td>
          </tr>
          <tr>
            <td>09:00</td>
            <td>10:00</td>
            <td>Singapore - Marina Bay Sands</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>11:00</td>
            <td>Singapore - Orchard Road</td>
          </tr>
          <tr>
            <td>11:00</td>
            <td>12:00</td>
            <td>Singapore - Jurong Bird Park</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>13:00</td>
            <td>Singapore - Singapore Zoo</td>
          </tr>
          {/* Japan */}
          <tr>
            <td>07:00</td>
            <td>09:00</td>
            <td>Tokyo - Mount Fuji</td>
          </tr>
          <tr>
            <td>09:00</td>
            <td>11:00</td>
            <td>Osaka - Nara</td>
          </tr>
          <tr>
            <td>11:00</td>
            <td>13:00</td>
            <td>Kyoto - Arashiyama</td>
          </tr>
          <tr>
            <td>13:00</td>
            <td>15:00</td>
            <td>Sapporo - Furano</td>
          </tr>
          <tr>
            <td>15:00</td>
            <td>17:00</td>
            <td>Hiroshima - Miyajima</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CarSchedule;
