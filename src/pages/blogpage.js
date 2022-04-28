import React from 'react';

const BlogPage = () => {
  return (
    <div className='2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16'>
      <div class='grid grid-cols-6 gap-8 my-5'>
        <div class='col-span-4'>
          <h1 className='lg:text-4xl text-3xl font-semibold leading-9 text-gray-800'>
            Moving up the corporate ladder?
          </h1>
          <p className='md:w-1/2 text-base leading-normal mt-4 sm:pr-10 text-gray-600'>
            Michael Jordan | 27 April 2022 | 5mins read
          </p>
          <div className='relative mt-5'>
            <img
              src='https://i.ibb.co/HxkBZQM/img-1.png'
              alt='stairs'
              width={'100%'}
            />
            <div className='bg-white absolute top-0 left-0'>
              <p className='text-base leading-4 py-3 px-5 text-gray-800'>
                News
              </p>
            </div>
          </div>

          <p className='text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </p>
          <p className='text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution
          </p>
          <p className='text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution
          </p>
        </div>
        <div className='col-span-2'>
          <h6 className='lg:text-2xl text-xl font-semibold text-gray-800'>
            Discover more what matters to you
          </h6>

          <div class='flex flex-wrap'>
            {[
              'Technology',
              'Science',
              'Fashion',
              'Personal',
              'Lifestyle',
              'Travel',
              'Food',
            ].map((category) => (
              <button class='m-1 bg-white transition duration-150 ease-in-out rounded text-gray-800 border border-gray-300 px-6 py-2 text-xs hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-800'>
                {category}
              </button>
            ))}
          </div>

          {[1, 2, 3].map((e) => (
            <div class='mt-4'>
              <img
                src='https://i.ibb.co/d6jQJyY/blog-2-desktop.png'
                alt='flying letters'
                className='w-full'
              />
              <div className='mt-4'>
                <h1 className='text-2xl font-semibold leading-6 mt-4 text-gray-800'>
                  Internet of things
                </h1>
                <p className='text-base leading-6 text-gray-600 mt-2'>
                  The emerge of internet of Things has brought in a need for
                  low-cost security technology.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
