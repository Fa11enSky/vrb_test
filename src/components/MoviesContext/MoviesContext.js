import React, { createContext, useContext, useState } from "react";
import deleteMovie from "../../services/deleteMovie";
import { Notify } from "notiflix";

const MovieContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(window.localStorage.getItem("favorites")) || []
  );

  const permanentDelete = (id) => {
    try {
      deleteMovie(id).then((data) => {
        const updatedFavorites = favorites.filter((el) => el._id !== data._id);
        const updatedMovies = movies.filter((el) => el._id !== data._id);
        setMovies(updatedMovies);
        window.localStorage.setItem(
          "favorites",
          JSON.stringify(updatedFavorites)
        );

        setFavorites(updatedFavorites);
        Notify.success("Movie removed successfully");
      });
    } catch (error) {
      Notify.failure(error.message);
    }
  };

  const toggleFavorites = (movie) => {
    if (favorites.find((el) => el.title === movie.title)) {
      const updatedFavorites = favorites.filter(
        (el) => el.title !== movie.title
      );

      window.localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      setFavorites(updatedFavorites);
      Notify.info("The movie has been successfully removed from favorites");
    } else {
      const updatedFavorites = [...favorites, movie];

      window.localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      setFavorites(updatedFavorites);
      Notify.info("The movie has been successfully added to favorites");
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        favorites,
        setFavorites,
        toggleFavorites,
        permanentDelete,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMoviesContext = () => useContext(MovieContext);
