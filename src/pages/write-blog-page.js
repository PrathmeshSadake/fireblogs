import React from 'react';
import FileBase64 from 'react-file-base64';
import MDEditor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState('');
  const [file, setFile] = React.useState(null);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const getFiles = (file) => {
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, image: file.base64, blogContent: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='container mx-auto px-3 md:px-0'
      data-color-mode='light'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 my-5'>
        <div>
          <div className='flex flex-col mb-5'>
            <label
              htmlFor='email'
              className='text-gray-800 text-md font-medium leading-tight tracking-normal mb-2'
            >
              Title
            </label>
            <textarea
              id='title'
              rows={1}
              onChange={(e) => setTitle(e.target.value)}
              className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700   bg-white font-normal  flex items-center p-2 text-md border-gray-300 rounded border shadow'
              // placeholder='Title'
            />
          </div>
          <div className='flex flex-col mb-3'>
            <label
              htmlFor='email'
              className='text-gray-800 text-md font-medium leading-tight tracking-normal mb-2'
            >
              Description
            </label>
            <textarea
              id='description'
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
              className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700   bg-white font-normal flex items-center p-2 text-md border-gray-300 rounded border shadow'
              placeholder='Description'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='email'
            className='text-gray-800 text-md font-medium leading-tight tracking-normal'
          >
            Blog Header Image
          </label>
          <div className='relative w-full h-96 rounded border-dashed border-2 border-gray-300 flex justify-center items-center mt-2'>
            {file && (
              <img
                src={file.base64}
                alt=''
                className='w-full h-full object-contain'
              />
            )}
            {file && (
              <button
                onClick={() => setFile(null)}
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
            )}
            {!file && (
              <FileBase64 multiple={false} onDone={(file) => getFiles(file)} />
            )}
          </div>
        </div>
      </div>
      <label
        htmlFor='email'
        className='text-gray-800 text-md font-medium leading-tight tracking-normal mb-2'
      >
        Blog Content
      </label>
      <MDEditor
        value={value}
        onChange={setValue}
        height={400}
        className='my-5'
      />
      {/* <MDEditor.Markdown source={value} /> */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 my-5'>
        <button className='bg-white transition duration-150 ease-in-out hover:bg-gray-200 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-6 py-2 text-md'>
          Cancel
        </button>
        <button
          type='submit'
          className='bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-md'
        >
          Post
        </button>
      </div>
    </form>
  );
}
