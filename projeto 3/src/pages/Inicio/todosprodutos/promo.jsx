import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./produtos.css";
import imagemTest1 from "./carrosselanimado/test1.png";
import imagemTest2 from "./carrosselanimado/test2.png";
import imagemTest3 from "./carrosselanimado/test3.png";
import imagemTest4 from "./carrosselanimado/test4.png";

function redimensionar(caminhoDaImagem, largura, altura, qualidade) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = largura;
      canvas.height = altura;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, largura, altura);
      resolve(canvas.toDataURL("image/png", qualidade));
    };
    img.src = caminhoDaImagem;
  });
}

function Promocao() {
  const [imagensRedimensionadas, setImagensRedimensionadas] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const redimensionarImagens = async () => {
      const imagens = [imagemTest1, imagemTest2, imagemTest3, imagemTest4];
      const imagensRedimensionadas = await Promise.all(
        imagens.map(async (imagem) => {
          const imagemRedimensionada = await redimensionar(
            imagem,
            windowSize.width,
            windowSize.height,
            0.8
          );
          return imagemRedimensionada;
        })
      );
      setImagensRedimensionadas(imagensRedimensionadas);
    };
    redimensionarImagens();
  }, [windowSize]);


  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
    <Slider {...settings}>
      {imagensRedimensionadas.map((imagem, index) => (
        <div key={index}>
          <img
            className="img-fluid full-width"
            src={imagem}
            alt={`test-${index}`}
          />
        </div>
      ))}
    </Slider>
    </div>
  );
}

export default Promocao;
