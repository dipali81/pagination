import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import FaSearch icon

const Home = () => {
  return (
    <div className="flex flex-col text-center md:items-center md:justify-center mt-12 text-white">
      <div className="max-w-screen-lg md:mx-auto md:px-6">
        <h1 className="text-xl md:text-3xl text-center font-bold mb-8">Data & Analytics Platform</h1>
        <p className="text-sm md:text-xl md:text-center mb-16 ml-2 mr-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          mauris in nisl faucibus, vel tincidunt magna tincidunt. Nulla facilisi.
          Mauris id nisi at mi vestibulum faucibus. Proin et risus vel magna
          ultricies elementum. Donec vitae est at nunc congue imperdiet.
        </p>

        <div className="flex items-center justify-center px-4 py-2 rounded-md mb-16">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-gray-800 px-4 py-2 rounded-l-md w-96 h-10 outline-none"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded-r-md h-10 flex-shrink-0">
            <FaSearch size={20} />
          </button>
        </div>


      </div>

      {/* Add more content or components as needed */}
    </div>
  );
};

export default Home;
