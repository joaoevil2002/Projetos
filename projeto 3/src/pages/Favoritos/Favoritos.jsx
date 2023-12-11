import React, { useState, useEffect } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import pizzaData from '../../components/static/pizza.json'; // Importe o arquivo de dados das pizzas

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

  // Função para encontrar o caminho da imagem correspondente ao nome da pizza
  const findPizzaImage = (productName) => {
    const pizzaItem = pizzaData.find((item) => item.name === productName);
    return pizzaItem ? pizzaItem.image : ''; // Retorna o caminho da imagem ou vazio se não encontrar
  };

  return (
    <div className="container">
      <h1>Meus Favoritos - Pizza</h1>
      <div className="carousel">
        {favorites.map((favorite, index) => {
          if (favorite.category === 'Pizza') {
            const imagePath = findPizzaImage(favorite.name); // Obtém o caminho da imagem

            return (
              <div className="item" key={index}>
                <div className="image-container">
                  <img src={imagePath} alt={favorite.name} loading="lazy" />
                  <div
                    className="heart-icon"
                    onClick={() => toggleFavorite(favorite.name)}
                  >
                    <FaHeart style={{ verticalAlign: 'middle', color: 'red' }} />
                  </div>
                  <div className="fa-star">
                    <FaStar />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{favorite.name}</span>
                  <button className="button" onClick={() => toggleFavorite(favorite.name)}>
                    Remover dos favoritos
                  </button>
                </div>
              </div>
            );
          }
          return null; // Se não for da categoria 'Pizza', não renderiza
        })}
      </div>
    </div>
  );
}

export default Favoritos;
