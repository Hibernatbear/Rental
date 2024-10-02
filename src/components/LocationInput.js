// components/LocationInput.js
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const LocationInput = () => {
  return (
    <div className="location-input">
      <FaMapMarkerAlt className="input-icon" />
      <input type="text" placeholder="Enter a location" />
      <label>Location</label>
    </div>
  );
};

export default LocationInput;
