// components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch, FaPlus, FaMinus } from 'react-icons/fa';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchBar = () => {
  // State for the date picker
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // State for the number of guests
  const [guests, setGuests] = useState(1);

  // Function to handle incrementing guests
  const handleIncrement = () => {
    setGuests(guests + 1);
  };

  // Function to handle decrementing guests
  const handleDecrement = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-section">
        <label>Where</label>
        <input type="text" placeholder="Search destinations" />
      </div>
      <div className="search-section">
        <label>Check in</label>
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Add dates"
          className="date-picker-input"
        />
      </div>
      <div className="search-section">
        <label>Check out</label>
        <ReactDatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Add dates"
          className="date-picker-input"
        />
      </div>
      <div className="search-section guest-section">
        <label>Number of guests</label>
        <div className="guest-counter">
          <button className="guest-btn" onClick={handleDecrement}>
            <FaMinus />
          </button>
          <span>{guests} {guests === 1 ? 'guest' : 'guests'}</span>
          <button className="guest-btn" onClick={handleIncrement}>
            <FaPlus />
          </button>
        </div>
      </div>
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
