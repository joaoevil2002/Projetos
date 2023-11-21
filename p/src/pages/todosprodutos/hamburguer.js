import './produtos.css'
import { useEffect, useState } from "react";

function Hamburguer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/static/static/hamburguer.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div className="container">
   <div className='search'>
       
       <p>hamburgueres</p>
    
   </div>
      <div className="carousel">
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">{oldPrice}</span>
                <span className="price">{price}</span>
                <button className='button'>+ adicionar ao carrinho</button>
              </div>
            </div>
          );
        })}
        
      </div>
      </div>);}
      export default Hamburguer