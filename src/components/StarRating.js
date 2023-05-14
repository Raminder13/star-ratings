import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/index.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
      <h2>{rating === 0 ? 'Please select a rating' : rating < 3 ? 'Not good' : rating < 4 ? 'Good' : 'Excellent'}</h2>
    </div>
  );
};

export default StarRating;
