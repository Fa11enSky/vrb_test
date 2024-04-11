import React, { useEffect, useState } from "react";
import fetchAllMovies from "../services/fetchAllMovies";
import MoviesList from "../components/MoviesList/MoviesList";
import SearchBar from "../components/SearchBar/SearchBar";
import filterByTitle from "../helpers/filterByTitle";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchAllMovies()
      .then((data) => setMovies(data))
      .catch((e) => setError(e));
  }, []);
  useEffect(() => {
  
})
  return (
    <section>
      <SearchBar setQuery={setQuery} />
      <MoviesList data={query?filterByTitle(query,movies):movies} />
    </section>
  );
};

export default Movies;
