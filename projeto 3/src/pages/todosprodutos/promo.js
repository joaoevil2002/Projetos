import "./produtos.css";
import { useEffect, useState } from "react";

function Promocão() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/static/static/promoção.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    
    <div className="containerPromo">
     
      <div className="carouselPromo">
        {data.map((item) => {
          const { id, name,  image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              
            </div>
          );
        })}
      </div>
      </div>);}
      export default Promocão;