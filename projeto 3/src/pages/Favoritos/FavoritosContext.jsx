import React, { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const toggleFavorite = (productName, category) => {
    const existingFavoriteIndex = favorites.findIndex(
      (fav) => fav.name === productName && fav.category === category
    );

    let updatedFavorites = [];

    if (existingFavoriteIndex !== -1) {
      updatedFavorites = favorites.filter(
        (item) => !(item.name === productName && item.category === category)
      );
    } else {
      const newFavorite = { name: productName, category };
      updatedFavorites = [...favorites, newFavorite];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritosContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosContext;
