import React, { useRef } from 'react';
const UserProfilePage = () => {
  let form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    // console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  return (
    <form id='login' onSubmit={handleSubmit}>
      <div className='bg-white'>
        <div className='container mx-auto bg-white rounded'>
          <div className='xl:w-full border-gray-300 dark:border-gray-700 py-5 bg-white'>
            <div className='flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center'>
              <p className='text-lg text-gray-800  font-bold'>Profile</p>
              <div className='ml-2 cursor-pointer text-gray-600 dark:text-gray-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width={16}
                  height={16}
                >
                  <path
                    className='heroicon-ui'
                    d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'
                    fill='currentColor'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='mx-auto'>
            <div className='mx-auto xl:mx-0'>
              <div className='rounded relative mt-8 h-48'>
                <img
                  src='https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg'
                  alt
                  className='w-full h-full object-cover rounded absolute shadow'
                />
                <div className='absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded' />

                <div className='w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center'>
                  <img
                    src='https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg'
                    alt
                    className='absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0'
                  />
                  <div className='absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto bg-white mt-10 rounded px-4'>
          <div className='xl:w-full border-b border-gray-300 dark:border-gray-700 py-5'>
            <div className='flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center'>
              <p className='text-lg text-gray-800  font-bold'>
                Personal Information
              </p>
              <div className='ml-2 cursor-pointer text-gray-600 dark:text-gray-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width={16}
                  height={16}
                >
                  <path
                    className='heroicon-ui'
                    d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'
                    fill='currentColor'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='mx-auto pt-4'>
            <div className='container mx-auto'>
              <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                <label
                  htmlFor='FirstName'
                  className='pb-2 text-sm font-bold text-gray-800 '
                >
                  First Name
                </label>
                <input
                  type='text'
                  id='FirstName'
                  name='firstName'
                  required
                  className='border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400'
                  placeholder
                />
              </div>
              <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                <label
                  htmlFor='LastName'
                  className='pb-2 text-sm font-bold text-gray-800 '
                >
                  Last Name
                </label>
                <input
                  type='text'
                  id='LastName'
                  name='lastName'
                  required
                  className='border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400'
                  placeholder
                />
              </div>
              <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                <label
                  htmlFor='Email'
                  className='pb-2 text-sm font-bold text-gray-800 '
                >
                  Email
                </label>
                <div className='border border-green-400 shadow-sm rounded flex'>
                  <div className='px-4 py-3  flex items-center border-r border-green-400'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-mail'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points='3 7 12 13 21 7' />
                    </svg>
                  </div>
                  <input
                    type='text'
                    id='Email'
                    name='email'
                    required
                    className='pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400'
                    placeholder='example@gmail.com'
                  />
                </div>
                <div className='flex justify-between items-center pt-1 text-green-400'>
                  <p className='text-xs'>Email submission success!</p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width={16}
                    height={16}
                  >
                    <path
                      className='heroicon-ui'
                      d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                              0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z'
                      stroke='currentColor'
                      strokeWidth='0.25'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='currentColor'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default UserProfilePage;
