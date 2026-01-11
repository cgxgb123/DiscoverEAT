import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorites = (recipe) => {
    setFavorites((prev) => [...prev, recipe]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((recipe) => recipe.idMeal !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((recipe) => recipe.idMeal === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
