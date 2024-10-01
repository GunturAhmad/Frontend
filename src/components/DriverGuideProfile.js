import React from 'react';

function DriverGuideProfile() {
  const profiles = [
    {
      name: 'John Doe',
      role: 'Driver',
      rating: 4.8,
      reviews: [
        'John was very professional and punctual.',
        'Safe driver and very friendly.',
        'Highly recommend John for any trip.'
      ]
    },
    {
      name: 'Jane Smith',
      role: 'Tour Guide',
      rating: 4.9,
      reviews: [
        'Jane is very knowledgeable and engaging.',
        'Fantastic tour guide with lots of great stories.',
        'Made the trip very enjoyable and informative.'
      ]
    }
  ];

  return (
    <div className="container-fluid text-light">
      <h1>Profil dan Ulasan Pengemudi dan Pemandu Wisata</h1>
      {profiles.map((profile, index) => (
        <div key={index} className="card text-dark mb-3">
          <div className="card-header">
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <p>Rating: {profile.rating}</p>
          </div>
          <div className="card-body">
            <h5>Ulasan:</h5>
            <ul>
              {profile.reviews.map((review, i) => (
                <li key={i}>{review}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DriverGuideProfile;
