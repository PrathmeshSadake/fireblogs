import React from 'react';
import HeroArticles from '../components/HeroArticles';
import BlogArticles from '../components/BlogArticles';
import Newsletter from '../components/Newsletter';
import CTA from '../components/CTA';

const homepage = () => {
  return (
    <div>
      <HeroArticles />
      <BlogArticles />
      <CTA />
      <Newsletter />
    </div>
  );
};

export default homepage;
