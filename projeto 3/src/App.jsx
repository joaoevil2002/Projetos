import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio/Inicio.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';
import Carrinho from './pages/Carrinho/Carrinho.jsx';
import Favoritos from './pages/Favoritos/Favoritos.jsx';
import Procurar from './pages/Procurar/Procurar.jsx'

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    const preferredTheme = getInitialTheme();
    setTheme(preferredTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  function getInitialTheme() {
    const preferredTheme = localStorage.getItem('theme');
    if (preferredTheme !== null) {
      return preferredTheme;
    } else {
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return userPrefersDark ? 'dark' : 'light';
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <Sidebar theme={theme} toggleTheme={toggleTheme}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Carrinho" element={<Carrinho />} />
            <Route path="/Favoritos" element={<Favoritos />} />
            <Route path="/Procurar" element={<Procurar />} />
          </Routes>
        </Sidebar>
      </div>
    </BrowserRouter>
  );
};

export default App;
