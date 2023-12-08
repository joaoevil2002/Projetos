import React, { useState, useEffect } from 'react';

function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const toggleFavorite = (productName) => {
    const existingFavoriteIndex = favorites.findIndex(
      (fav) => fav.name === productName && fav.category === 'Pizza'
    );

    let updatedFavorites = [];

    if (existingFavoriteIndex !== -1) {
      updatedFavorites = favorites.filter(
        (item) => !(item.name === productName && item.category === 'Pizza')
      );
    } else {
      const newFavorite = { name: productName, category: 'Pizza' };
      updatedFavorites = [...favorites, newFavorite];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Meus Favoritos</h1>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            {favorite.name} - {favorite.category}
            <button onClick={() => toggleFavorite(favorite.name)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favoritos;
