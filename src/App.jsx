import { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { fetchMovies, fetchMovieDetails } from "./service/ServiceAPI";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("marvel");
  const [filters, setFilters] = useState({ genre: "", year: "", rating: 0 });
  const [selectedMovie, setSelectedMovie] = useState(null);

  const genres = ["Movie", "Series", "Episodes",];

  useEffect(() => {
    if (searchTerm) {
      fetchMovies(searchTerm).then(setMovies);
    }
  }, [searchTerm]);

  const handleSelectMovie = async (id) => {
    const details = await fetchMovieDetails(id);
    setSelectedMovie(details);
  };

  const filteredMovies = movies.filter((m) => {
    const matchGenre = filters.genre
      ? m.Type.toLowerCase().includes(filters.genre.toLowerCase())
      : true;
    const matchYear = filters.year ? m.Year === filters.year : true;
    const matchRating = filters.rating
      ? Math.floor(Math.random() * 6) >= filters.rating
      : true; 
    return matchGenre && matchYear && matchRating;
  });


  return (
    <>
       <div className="min-h-screen bg-gray-100">
      <Header
        onSearch={setSearchTerm}
        filters={filters}
        onFilterChange={setFilters}
        genres={genres}
      />
      <MovieList movies={filteredMovies} onSelectMovie={handleSelectMovie} />
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
      
    </>
  )
}

export default App




