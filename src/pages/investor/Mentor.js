import React from 'react';

export default function Mentor() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Mentorship Mixer',
      date: 'May 1, 2023',
      time: '4:00 PM - 6:00 PM',
      location: '123 Main St, Anytown USA',
    },
    {
      id: 2,
      title: 'Networking Luncheon',
      date: 'June 15, 2023',
      time: '12:00 PM - 2:00 PM',
      location: '456 Oak Ave, Anytown USA',
    },
  ];

  return (
    <div>
      <h2>Mentorship and Networking</h2>
      {upcomingEvents.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
        </div>
      ))}
    </div>
  );
}