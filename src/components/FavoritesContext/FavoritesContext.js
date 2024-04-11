import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(window.localStorage.getItem("favorites")) || []
  );

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
    } else {
      const updatedFavorites = [...favorites, movie];
      
      window.localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );
      
      setFavorites(updatedFavorites);
    }
  };

  return (
    <MovieContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(MovieContext);
