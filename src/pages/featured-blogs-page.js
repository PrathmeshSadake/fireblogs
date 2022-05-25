import React from 'react';
import FeaturedBlog from '../components/FeaturedArticles';

const FeaturedBlogsPage = () => {
  return (
    <div className='2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto'>
      <div className='grid grid-cols-8 gap-3 my-5'>
        <div className='col-span-6'>
          <FeaturedBlog />
        </div>
        <div className='col-span-2'>
          <h6 className='lg:text-2xl text-xl font-semibold text-gray-800'>
            Discover more what matters to you
          </h6>

          <div className='flex flex-wrap'>
            {[
              'Technology',
              'Science',
              'Fashion',
              'Personal',
              'Lifestyle',
              'Travel',
              'Food',
            ].map((category) => (
              <button className='m-0.5 bg-white transition duration-150 ease-in-out rounded text-gray-800 border border-gray-300 px-3 py-1 text-xs hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-800'>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogsPage;
