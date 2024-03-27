import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import fetchWithAuth from '../../api/fetchWithAuth'
export default function Pitch_event() {
    const [events, setEvents] = useState([
        {
            title: "",
            start: "",
            end: "",
            description: "",
        }
    ]);

useEffect(() => {
    fetchWithAuth(`${process.env.REACT_APP_API_HOST}/api/pitch-events`)
      .then((res) => res.json())
      .then((jsonRes) => {setEvents(jsonRes);
      });
  }, []);

const eventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        {}
      <div className="event-container">
        <div className="event-title">{eventInfo.event.title}</div>
        <div className="event-description">{eventInfo.event.extendedProps.description}</div>
      </div>
      </>
    );
  };

  return (
    <div>
      <h2>Pitch Event Schedule</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={eventContent}
      />
    </div>
  );

}