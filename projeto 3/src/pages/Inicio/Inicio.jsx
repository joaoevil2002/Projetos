import React from 'react';
import Pizza from './todosprodutos/pizza';
import Hamburguer from './todosprodutos/hamburguer';
import Esfirra from './todosprodutos/esfirra';
import Pastel from './todosprodutos/pastel';
import Promocao from './todosprodutos/promo';
import { FavoritosProvider } from '../Favoritos/FavoritosContext'; // Importe o FavoritosProvider

function Inicio() {
  return (
    <FavoritosProvider>
      <div>
        <Promocao />
        <Pizza />
        <Hamburguer />
        <Esfirra />
        <Pastel />
        {/* Outros componentes de produtos aqui */}
      </div>
    </FavoritosProvider>
  );
}

export default Inicio;
