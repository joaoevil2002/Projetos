import React, { useState, useEffect, useContext } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FavoritosContext } from '../../Favoritos/FavoritosContext';

function Pizza() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogText, setDialogText] = useState('');
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 });
  const { favorites: contextFavorites, toggleFavorite } = useContext(FavoritosContext);

  useEffect(() => {
    fetch('/static/static/pizza.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleButtonClick = (event, productName) => {
    const rect = event.target.getBoundingClientRect();
    const x = rect.right + 10;
    const y = rect.top - 25;
    setDialogPosition({ x, y });
  
    const existingFavoriteIndex = contextFavorites.findIndex(
      (fav) => fav.name === productName && fav.category === 'Pizza'
    );
  
    if (existingFavoriteIndex !== -1) {
      toggleFavorite(productName, 'Pizza');
      setDialogText(`Removido dos favoritos: ${productName}`);
    } else {
      toggleFavorite(productName, 'Pizza');
      setDialogText(`Adicionado aos favoritos: ${productName}`);
    }
  
    setDialogVisible(true);
  
    setTimeout(() => {
      setDialogVisible(false);
      setDialogText('');
    }, 2000);
  };

  return (
    <div className="container">
      <div className="search">
        <p>Pizza</p>
      </div>
      <div className="carousel">
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          const isFavorite = contextFavorites.some(
            (fav) => fav.name === name && fav.category === 'Pizza'
          );

          return (
            <div className="item" key={id}>
              <div className="image-container">
                <img src={image} alt={name} loading="lazy" />
                <div
                  className="heart-icon"
                  onClick={(event) => handleButtonClick(event, name)}
                >
                  {isFavorite ? (
                    <FaHeart style={{ verticalAlign: 'middle', color: 'red' }} />
                  ) : (
                    <FaHeart style={{ verticalAlign: 'middle' }} />
                  )}
                </div>
                <div className="fa-star">
                  <FaStar />
                </div>
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">{oldPrice}</span>
                <span className="price">{price}</span>
                <button className="button" onClick={() => navigate(`/produto/${name}`)}>
                  + adicionar ao carrinho
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {dialogVisible && (
        <div
          className="modal"
          style={{ top: dialogPosition.y, left: dialogPosition.x }}
        >
          <div className="modal-content">
            <span className="close" onClick={() => setDialogVisible(false)}>
              &times;
            </span>
            <p className="dialog-text">{dialogText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pizza;
