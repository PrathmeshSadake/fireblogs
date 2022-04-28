import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import theme from './theme';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import Homepage from './pages/homepage';
import Blogpage from './pages/blogpage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/articles/:slug' element={<Blogpage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;