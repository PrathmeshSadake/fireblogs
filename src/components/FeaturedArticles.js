import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FeaturedBlog = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/v1/blogs`)
      .then((res) => setFeaturedPosts(res.data.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className=''>
      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-4xl font-semibold leading-9 text-gray-800'>
          Featured Blog Articles
        </h1>
        <p className='text-base leading-6 text-gray-600 sm:w-96 md:w-9/12 mt-4'>
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:mt-12 md:mt-9 mt-6'>
        {featuredPosts.map((article) => (
          <div className='relative flex'>
            <img
              src='https://i.ibb.co/kqt7S1z/img-1.png'
              alt='chair'
              className='w-full'
            />
            <div className='absolute top-0 flex flex-col w-full h-full items-center justify-between py-10'>
              <div className='flex items-center justify-center flex-col h-full'>
                <h2 className='xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal text-center text-white'>
                  The history of wood
                </h2>
                <p className='xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              <div className='px-4 md:w-auto w-full'>
                <button className='w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none'>
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlog;
