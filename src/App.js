import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import theme from './theme';
import Navbar from './layout/Navbar';
import Homepage from './pages/homepage';
import Footer from './layout/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
