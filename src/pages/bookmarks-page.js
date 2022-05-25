import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BookmarksPage() {
  return (
    <div className='mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center'>
      <div className='flex flex-col jusitfy-start items-start'>
        <div>
          <Link to='/'>
            <p className='text-sm leading-4 text-gray-600'>Home</p>
          </Link>
        </div>
        <div className='mt-3'>
          <h1 className='text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800'>
            Saved Articles
          </h1>
        </div>
        <div className='mt-4'>
          <p className='text-2xl tracking-tight leading-6 text-gray-600'>
            03 items
          </p>
        </div>
        <div className=' mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10'>
          {[1, 2, 3, 4, 5].map((el) => (
            <div className='flex flex-col'>
              <div className='relative'>
                <img
                  className='h-60 w-full object-cover'
                  src='https://source.unsplash.com/cckf4TsHAuw'
                  alt='shoes'
                />

                <button
                  aria-label='close'
                  className='top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400'
                >
                  <svg
                    className='fil-current'
                    width={14}
                    height={14}
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13 1L1 13'
                      stroke='currentColor'
                      strokeWidth='1.25'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M1 1L13 13'
                      stroke='currentColor'
                      strokeWidth='1.25'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
              <div className='mt-2 flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                  <p className='tracking-tight text-xl font-medium leading-5 text-gray-800'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    aria-label='view post'
                    className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400'
                  >
                    <i class='fa-solid fa-arrow-right'></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
