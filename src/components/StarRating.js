import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const ratings = ["Bad", "Okay", "Good", "Great", "Excellent"];

  return (
    <div className="star-rating">
      {ratings.map((ratingValue, index) => (
        <Star
          key={index}
          selected={index < rating}
          onClick={() => handleStarClick(index)}
        />
      ))}
      <h2>{ratings[rating - 1]}</h2>
    </div>
  );
};

export default StarRating;
