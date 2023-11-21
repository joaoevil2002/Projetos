import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio.jsx';
import Perfil from './pages/Perfil.jsx';
import Carrinho from './pages/Carrinho.jsx';
import Email from './pages/Email.jsx';
import Favoritos from './pages/Favoritos.jsx';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <Sidebar theme={theme} toggleTheme={toggleTheme}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Email" element={<Email />} />
            <Route path="/Carrinho" element={<Carrinho />} />
            <Route path="/Favoritos" element={<Favoritos />} />
          </Routes>
        </Sidebar>
      </div>
    </BrowserRouter>
  );
};

export default App;
