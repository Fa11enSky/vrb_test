import React, { useEffect, useState } from "react";
import fetchAllMovies from "../services/fetchAllMovies";
import MoviesList from "../components/MoviesList/MoviesList";
import SearchBar from "../components/SearchBar/SearchBar";
import filterByTitle from "../helpers/filterByTitle";
import { useMoviesContext } from "../providers/MoviesContext/MoviesContext";
import AddBtn from "../components/AddBtn/AddBtn";
import { Notify } from "notiflix";

const Movies = () => {
  const { movies, setMovies } = useMoviesContext();
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchAllMovies()
      .then((data) => setMovies(data))
      .catch((e) => Notify.failure(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div>
        {" "}
        <SearchBar setQuery={setQuery} /> <AddBtn />
      </div>
      <MoviesList data={query ? filterByTitle(query, movies) : movies} />
    </section>
  );
};

export default Movies;
