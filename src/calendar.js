import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarComponent.css';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="google-calendar-clone">
      <div className="sidebar">
        {/* Add your sidebar content here */}
      </div>
      <div className="main-content">
        <div className="calendar-wrapper">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="custom-calendar"
          />
        </div>
        <div className="event-list">
          <h2>Events for {selectedDate.toDateString()}</h2>
          {/* Add your event list content here */}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
