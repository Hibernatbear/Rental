// components/DatePicker.js
import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="date-picker">
      <div className="date-picker-wrapper">
        <FaCalendarAlt className="input-icon" />
        <ReactDatePicker 
          selected={startDate} 
          onChange={date => setStartDate(date)} 
          placeholderText="Check-In" 
        />
        <label>Check-In</label>
      </div>
      
      <div className="date-picker-wrapper">
        <FaCalendarAlt className="input-icon" />
        <ReactDatePicker 
          selected={endDate} 
          onChange={date => setEndDate(date)} 
          placeholderText="Check-Out" 
        />
        <label>Check-Out</label>
      </div>
    </div>
  );
};

export default DatePicker;
