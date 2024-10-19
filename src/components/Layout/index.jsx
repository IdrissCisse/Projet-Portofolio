import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.scss' ; ;

const Layout = () => (
  <div className='layout'>
    <header className='header'>
      <nav className='nav'>
        <NavLink>Accueil</NavLink>
        <NavLink> Autres Parties  </NavLink>
      </nav>
    </header>
    <main className='main'>
      <Outlet />
    </main>
    <footer className='footer'> </footer>
  </div>
);

export default Layout;