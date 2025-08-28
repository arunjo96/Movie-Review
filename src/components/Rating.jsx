import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Star({ filled, onClick }) {
  return (
    <span
      onClick={onClick}
      className={`cursor-pointer text-xl ${
        filled ? "text-yellow-400" : "text-gray-300"
      }`}
    >
      <FontAwesomeIcon icon={faStar} className="text-sm" />
    </span>
  );
}

const Rating = ({ imdbID }) => {
    const [rating, setRating] = useState(
    Number(localStorage.getItem(imdbID)) || 0
  );

  useEffect(() => {
    localStorage.setItem(imdbID, rating);
  }, [rating, imdbID]);

  return (
    <>
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= rating}
          onClick={() => setRating(star)}
        />
      ))}
      <span className="text-sm text-gray-600 ml-2">
        {rating ? `${rating}/5` : "No rating"}
      </span>
    </div>
    </>
  );
}

export default Rating
