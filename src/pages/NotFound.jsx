// NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for could not be found.</p>
      <Link>
      </Link>
      {/* You can add additional elements, links, or a button to navigate */}
    </div>
  );
};

export default NotFound;
