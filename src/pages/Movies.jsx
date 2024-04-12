import React, { useEffect, useState } from "react";
import fetchAllMovies from "../services/fetchAllMovies";
import MoviesList from "../components/MoviesList/MoviesList";
import SearchBar from "../components/SearchBar/SearchBar";
import filterByTitle from "../helpers/filterByTitle";
import deleteMovie from "../services/deleteMovie";
import { useFavoritesContext } from "../components/FavoritesContext/FavoritesContext";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const handleDelete = (id) => {
    deleteMovie(id).then(data => {
      const updatedList = movies.filter(el => el._id !== id);
      setMovies(updatedList);
      
    })
  }
  

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
      <MoviesList toDelete={handleDelete} data={query?filterByTitle(query,movies):movies} />
    </section>
  );
};

export default Movies;
