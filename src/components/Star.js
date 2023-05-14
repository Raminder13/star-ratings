import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar
    className="star"
    color={selected ? "#ffc107" : "#e4e5e9"}
    onClick={onSelect}
  />
);

export default Star;
