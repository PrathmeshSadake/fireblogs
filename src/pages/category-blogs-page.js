import React from 'react';

import CategoryBlogs from '../components/CategoryBlogs';
import Newsletter from '../components/Newsletter';
import CTA from '../components/CTA';

const CategoryBlogsPage = () => {
  return (
    <div>
      <CategoryBlogs />
      <CTA />
      <Newsletter />
    </div>
  );
};

export default CategoryBlogsPage;
