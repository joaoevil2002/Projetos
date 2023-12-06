import React from 'react'
import '../../App.css'
import Pizza from './todosprodutos/pizza'
import Promocão from './todosprodutos/promo';
import Hamburguer from './todosprodutos/hamburguer'
import Esfirra from './todosprodutos/esfirra'
import Pastel from './todosprodutos/pastel'

function Inicio() {
  return (
    <>
    <div><Promocão/></div>
    {/*filtro* */}
  
    <div><Pizza/></div>
    <div><Hamburguer/></div>
    <div><Esfirra/></div>
    <div><Pastel/></div>
  
         
   
    </>
  );
}

export default Inicio;