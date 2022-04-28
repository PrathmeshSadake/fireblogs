import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import theme from './theme';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import Homepage from './pages/homepage';
import Blogpage from './pages/blogpage';
import ArticlesPage from './pages/articlespage';
import CategoryBlogsPage from './pages/category-blogs-page';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/categories' element={<CategoryBlogsPage />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/articles/:slug' element={<Blogpage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
