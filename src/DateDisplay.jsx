import React from 'react';
import './App.css';

const DateDisplay = () => {
      const today = new Date();
      const options = { weekday: 'long' };
      const dateString = today.toLocaleDateString();
      const dayString = today.toLocaleDateString('en-US', options);

      return (
      <div className="date-display">
            <span className="date">{dateString}</span>
            <span className="day">{dayString}</span>
      </div>
      );
};

export default DateDisplay;
