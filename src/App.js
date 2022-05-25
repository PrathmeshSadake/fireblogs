import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import theme from './theme';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import Homepage from './pages/homepage';
import Blogpage from './pages/blogpage';
import SignInPage from './pages/signin-page';
import ArticlesPage from './pages/articlespage';
import ContactUsPage from './pages/contact-us-page';
import CategoryBlogsPage from './pages/category-blogs-page';
import UserProfilePage from './pages/user-profile-page';
import Error404 from './pages/404-error';
import BookmarksPage from './pages/bookmarks-page';
import FeaturedBlogsPage from './pages/featured-blogs-page';
import WriteBlogPage from './pages/write-blog-page';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/categories' element={<CategoryBlogsPage />} />
        <Route path='/account/signin' element={<SignInPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/articles/:slug' element={<Blogpage />} />
        <Route path='/articles/featured' element={<FeaturedBlogsPage />} />
        <Route path='/articles/saved-articles' element={<BookmarksPage />} />
        <Route path='/account/me' element={<UserProfilePage />} />
        <Route path='/articles/new' element={<WriteBlogPage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
