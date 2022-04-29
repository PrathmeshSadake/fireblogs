import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuSm, setShowMenuSm] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className='2xl:container 2xl:mx-auto md:py-5 lg:px-20 md:px-6 p-4'>
      <div className='flex items-center justify-between'>
        <div className='lg:w-3/12'>
          <button
            onClick={() => setShowMenu(true)}
            aria-label='Open Menu'
            className='text-gray-800  hidden md:block lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded'
          >
            <svg
              className='fill-stroke'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20 18L4 18'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M14 12L4 12'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M18 6L4 6'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <div className='lg:w-6/12 flex flex-col justify-center items-center space-y-3.5'>
          <div className='hidden lg:block'>
            <ul className='flex items-center space-x-10'>
              <li>
                <Link
                  to='/'
                  className=' dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  to='/categories'
                  className=' dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className=' dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                >
                  Featured
                </Link>
              </li>

              <li>
                <Link
                  to='/contact-us'
                  className=' dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='lg:w-3/12 flex justify-end items-center space-x-4'>
          {/* bookmark icon */}
          <Link to='/articles/saved-articles'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
              />
            </svg>
          </Link>

          {/* user icon */}
          <Link to='account/me'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </Link>

          <button
            onClick={() => setShowMenuSm(true)}
            aria-label='open menu'
            className='text-gray-800  md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5'
          >
            <svg
              className='fill-stroke'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 6H20'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10 12H20'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6 18H20'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id='md-menu'
        className={`${
          showMenu ? 'md:block' : ''
        } hidden lg:hidden absolute z-10 inset-0 h-screen w-full dark:bg-gray-800 bg-gray-800 bg-opacity-70 dark:bg-opacity-70`}
      >
        <div className='relative w-full h-screen'>
          <div className='absolute inset-0 w-1/2 bg-white p-6 justify-center'>
            <div className='flex items-center justify-end pb-4'>
              <button
                onClick={() => setShowMenu(false)}
                aria-label='close menu'
                className='focus:outline-none focus:ring-2 focus:ring-gray-800'
              >
                <svg
                  className='fill-stroke text-gray-800 '
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 4L4 12'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4 4L12 12'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
            <div className='mt-8'>
              <ul className='flex flex-col space-y-8'>
                <li className='flex items-center justify-between'>
                  <Link
                    to='/'
                    className=' text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                  >
                    Trending
                  </Link>
                  <button
                    className='fill-stroke text-black '
                    aria-label='show options'
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 6L8 10L4 6'
                        stroke='currentColor'
                        strokeWidth='0.75'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </li>
                <li className='flex items-center justify-between'>
                  <Link
                    to='/categories'
                    className=' text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                  >
                    Categories
                  </Link>
                  <button
                    className='fill-stroke text-black '
                    aria-label='show options'
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 6L8 10L4 6'
                        stroke='currentColor'
                        strokeWidth='0.75'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </li>
                <li className='flex items-center justify-between'>
                  <Link
                    to='/'
                    className=' text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                  >
                    Featured
                  </Link>
                  <button
                    className='fill-stroke text-black '
                    aria-label='show options'
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 6L8 10L4 6'
                        stroke='currentColor'
                        strokeWidth='0.75'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </li>

                <li className='flex items-center justify-between'>
                  <Link
                    to='/contact-us'
                    className=' text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                  >
                    Contact us
                  </Link>
                  <button
                    className='fill-stroke text-black '
                    aria-label='show options'
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 6L8 10L4 6'
                        stroke='currentColor'
                        strokeWidth='0.75'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div
        id='mobile-menu'
        className={`${
          showMenuSm ? 'flex' : 'hidden'
        } md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-4`}
      >
        <div className='w-full'>
          <div className='flex items-center justify-between border-b border-gray-200 pb-4 mx-4'>
            <div />
            <div>
              <p className='text-base font-semibold text-gray-800'>Menu</p>
            </div>
            <button
              aria-label='close menu'
              onClick={() => setShowMenuSm(false)}
              className='text-gray-800  focus:outline-none focus:ring-2 focus:ring-gray-800'
            >
              <svg
                className='fill-stroke'
                width={20}
                height={20}
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 5L5 15'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5 5L15 15'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='mt-6 mx-4'>
          <ul className='flex flex-col space-y-8'>
            <li className='flex items-center justify-between'>
              <Link
                to='/'
                className='text-base text-gray-800 focus:outline-none  focus:ring-2 focus:ring-gray-800 hover:underline'
              >
                Trending
              </Link>
              <button className='focus:outline-none focus:ring-2 text-black  focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5'>
                <svg
                  className='fill-stroke'
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 6L8 10L4 6'
                    stroke='currentColor'
                    strokeWidth='0.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </li>
            <li className='flex items-center justify-between'>
              <Link
                to='/categories'
                className='text-base text-gray-800 focus:outline-none  focus:ring-2 focus:ring-gray-800 hover:underline'
              >
                Categories
              </Link>
              <button className='focus:outline-none focus:ring-2 text-black  focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5'>
                <svg
                  className='fill-stroke'
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 6L8 10L4 6'
                    stroke='currentColor'
                    strokeWidth='0.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </li>
            <li className='flex items-center justify-between'>
              <Link
                to='/'
                className='text-base text-gray-800 focus:outline-none  focus:ring-2 focus:ring-gray-800 hover:underline'
              >
                Featured
              </Link>
              <button className='focus:outline-none focus:ring-2 text-black  focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5'>
                <svg
                  className='fill-stroke'
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 6L8 10L4 6'
                    stroke='currentColor'
                    strokeWidth='0.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </li>
            <li className='flex items-center justify-between'>
              <Link
                to='/contact-us'
                className='text-base text-gray-800 focus:outline-none  focus:ring-2 focus:ring-gray-800 hover:underline'
              >
                Contact us
              </Link>
              <button className='focus:outline-none focus:ring-2 text-black  focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5'>
                <svg
                  className='fill-stroke'
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 6L8 10L4 6'
                    stroke='currentColor'
                    strokeWidth='0.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className='w-full h-full flex items-end'>
          <ul className='bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full'>
            <li>
              <Link
                to=''
                className='flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
              >
                <div>
                  <svg
                    width={22}
                    height={22}
                    viewBox='0 0 22 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z'
                      stroke='#1F2937'
                      strokeWidth='1.25'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M1 5H21'
                      stroke='#1F2937'
                      strokeWidth='1.25'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9'
                      stroke='#1F2937'
                      strokeWidth='1.25'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <p className='text-base text-gray-800'>Cart</p>
              </Link>
            </li>
            <li>
              <Link
                to='/articles/saved-articles'
                className='flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
              >
                <div>
                  <svg
                    width={20}
                    height={20}
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z'
                      stroke='#1F2937'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <p className='text-base text-gray-800'>Bookmarks</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
