export default function MovieDetails({ movie, onClose }) {
    if (!movie) return null;
    
    const MovieDetailImgURL = "https://via.placeholder.com/300x450"

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-20">
      <div className="bg-white max-w-4xl w-full rounded-lg p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          style={{ cursor: "pointer" }}
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
        >
          Close
        </button>

        <div className="flex flex-col md:flex-row gap-4">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : MovieDetailImgURL}
            alt={movie.Title}
            className="w-50 h-auto rounded"
          />
          <div>
            <h2 className="text-2xl font-bold">{movie.Title}</h2>
            <p className="text-gray-500 text-sm pt-3">
              {movie.Year} - {movie.Genre}
            </p>
            <p className="mt-3 text-sm">{movie.Plot}</p>
            <p className="mt-2 text-sm">
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p className="mt-1 text-sm">
              <strong>Director:</strong> {movie.Director}
            </p>
            <p className="mt-1 text-sm">
              <strong>IMDB Rating:</strong> {movie.imdbRating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
