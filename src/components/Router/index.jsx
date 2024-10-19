import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Layout from '../Layout';

const AppRouter = () => (
  <Router>
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
