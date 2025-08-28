const API_URL = "https://www.omdbapi.com/";
const API_KEY = "65f2927a"; 


export const fetchMovies = async (searchTerm) => {
  try {
    const res = await fetch(`${API_URL}?apikey=${API_KEY}&s=${searchTerm}`);
    const data = await res.json();

    if (data.Response === "True") {
      return data.Search; 
    } else {
      return []; 
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};


export const fetchMovieDetails = async (id) => {
  try {
    const res = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
    const data = await res.json();
    return data.Response === "True" ? data : null;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
