import './produtos.css';
import { useEffect, useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';

function Esfirra() {
  const [data, setData] = useState([]);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleButtonClick = (event, productName) => {
    const rect = event.target.getBoundingClientRect();
    const x = rect.right + 10; // Posicionamento à direita do ícone
    const y = rect.top - 25; // Ajuste para alinhamento com o topo do ícone
    setTooltipPosition({ x, y });
    setTooltipText(`Adicionado aos favoritos a Esfirra de: ${productName}`);
    setTooltipVisible(true);

    setTimeout(() => {
      setTooltipVisible(false);
      setTooltipText('');
    }, 2000); // Fecha o tooltip após 2 segundos (você pode ajustar o tempo conforme necessário)
  };

  useEffect(() => {
    fetch('/static/static/esfirra.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div className="container">
      <div className="search">
        <p>Esfirra</p>
      </div>
      <div className="carousel">
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image-container">
                <img src={image} alt={name} loading="lazy" />
                <div
                  className="heart-icon"
                  onClick={(event) => handleButtonClick(event, name)}
                >
                  <FaHeart style={{ verticalAlign: 'middle' }} />
                </div>
                <div className="fa-star">
                  <FaStar />
                </div>
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">{oldPrice}</span>
                <span className="price">{price}</span>
                <button className="button">+ adicionar ao carrinho</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tooltip */}
      {tooltipVisible && (
        <div
          className="tooltip"
          style={{ top: tooltipPosition.y, left: tooltipPosition.x }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}

export default Esfirra;
