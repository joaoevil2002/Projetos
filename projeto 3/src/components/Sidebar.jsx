import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaTh,
  FaUserAlt,
  FaShoppingCart,
  FaHeart,
  FaMoon,
  FaSun,
  FaSearch
} from 'react-icons/fa';

const Sidebar = ({ children, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();
  const menuItem = [
    {
      path: '/',
      name: 'Inicio',
      icon: <FaTh />
    },
    {
      path: '/Perfil',
      name: 'Perfil',
      icon: <FaUserAlt />
    },
    {
      path: '/Carrinho',
      name: 'Carrinho',
      icon: <FaShoppingCart />
    },
    {
      path: '/Favoritos',
      name: 'Favoritos',
      icon: <FaHeart />
    },
    {
      path: '/Procurar',
      name: 'Procurar',
      icon: <FaSearch />
    },
  ];

  const setDarkTheme = () => {
    if (theme !== 'dark') {
      toggleTheme('dark');
    }
  };

  const setLightTheme = () => {
    if (theme !== 'light') {
      toggleTheme('light');
    }
  };

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`link${item.path === location.pathname ? ' active' : ''}`}
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </Link>
        ))}
        <div className="theme-icons">
          <FaMoon className="moon-icon" onClick={setDarkTheme} />
          <FaSun className="sun-icon" onClick={setLightTheme} />
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
