import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelectMovie, itemsPerPage = 8 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!movies || movies.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No movies found</p>;
  }

  const totalPages = Math.ceil(movies.length / itemsPerPage);


  const currentMovies = movies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {currentMovies.map((movie, index) => (
          <MovieCard
            key={`${movie.imdbID}-${index}`}
            movie={movie}
            onClick={onSelectMovie}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-6 text-xs pb-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:bg-gray-400 cursor-pointer"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:bg-gray-400 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
