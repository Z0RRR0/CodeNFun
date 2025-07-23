const API_KEY = "22597d4938263a72bce0fb0964abcc89";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (!data.results) {
    throw new Error("No results found.");
  }

  return data.results;
};
