import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BlogArticles = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/v1/blogs`)
      .then((res) =>
        setFeaturedPosts(res.data.results.filter((post, idx) => idx < 3))
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto'>
      <h1 className='lg:text-4xl text-3xl font-semibold leading-9 text-gray-800'>
        Featured articles
      </h1>
      <p className='md:w-1/2 text-base leading-normal mt-4 sm:pr-10 text-gray-600'></p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mt-5'>
        {featuredPosts.map((article) => (
          <div>
            <div>
              <div className='relative'>
                <img src='https://i.ibb.co/HxkBZQM/img-1.png' alt='stairs' />
                <div className='bg-white absolute top-0 left-0'>
                  <p className='text-base leading-4 py-3 px-5 text-gray-800'>
                    News
                  </p>
                </div>
              </div>
              <p className='text-base font-light leading-4 text-gray-800 mt-6'>
                Michael Jackson
              </p>
              <h1 className='text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800'>
                Moving up the corporate ladder?
              </h1>
              <p className='text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </p>
              <button className='flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700'>
                <p className='text-base font-medium leading-4 text-white'>
                  Read more
                </p>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.33203 8H12.6654'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M10 10.6667L12.6667 8'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M10 5.33344L12.6667 8.0001'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogArticles;
