import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../service/ServiceAPI";
import Rating from "./Rating";

const MovieCard = ({ movie, onClick }) => {
  const postImgURL = "https://via.placeholder.com/300x450";
  const [imdbRating, setImdbRating] = useState(null);


  useEffect(() => {
    const getDetails = async () => {
      const details = await fetchMovieDetails(movie.imdbID);
      if (details && details.imdbRating !== "N/A") {
        setImdbRating(parseFloat(details.imdbRating));
      }
    };
    getDetails();
  }, [movie.imdbID]);

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden  hover:shadow-lg transition">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : postImgURL}
        alt={movie.Title}
        className="w-full h-75 object-fill cursor-pointer"
        onClick={() => onClick(movie.imdbID)}
      />

      <div className="p-3 content_details">
        <h2 className="font-semibold text-md truncate">{movie.Title}</h2>
        <p className="text-sm font-medium pt-2">{movie.Year}</p>
        <div className="div flex justify-between mb-2">
          <p className="text-gray-500 text-xs mt-1">{movie.Type}</p>
          {imdbRating ? (
            <span className="text-yellow-500 font-semibold text-xs">
              {imdbRating}/10
            </span>
          ) : (
            <span className="text-gray-400 text-sm">No rating</span>
          )}
        </div>

          <Rating imdbID={movie.imdbID} />
       
      </div>
    </div>
  );
};

export default MovieCard;
