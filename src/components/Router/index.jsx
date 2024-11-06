import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../../pages/App';

const AppRouter = () => (
  <Router basename="/Projet-Portofolio">
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);

export default AppRouter;
