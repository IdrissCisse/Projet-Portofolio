import React from 'react';
import { useState } from 'react';
import './index.scss';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <h1 className="header-title">Idriss Cissé</h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <a
              href="#home"
              className={`nav-link ${activeLink === '#home' ? 'active' : ''}`}
              onClick={() => handleLinkClick('#home')}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeLink === '#about' ? 'active' : ''}`}
              onClick={() => handleLinkClick('#about')}
            >
              À-propos
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${
                activeLink === '#projects' ? 'active' : ''
              }`}
              onClick={() => handleLinkClick('#projects')}
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${
                activeLink === '#contact' ? 'active' : ''
              }`}
              onClick={() => handleLinkClick('#contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
