import React from 'react';
import Pizza from './pages/todosprodutos/pizza'
import Promocão from './pages/todosprodutos/promo';
import Hamburguer from './pages/todosprodutos/hamburguer'
import Esfirra from './pages/todosprodutos/esfirra'
import Pastel from './pages/todosprodutos/pastel'

function App() {
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

export default App;