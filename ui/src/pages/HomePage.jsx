import React from "react";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Logo and Welcome Message Section */}
      <div className="text-center mb-8">
        <img
          src="/path-to-logo/logo.png"
          alt="Logo"
          className="w-28 mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to the Scholarship Portal
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Select a dashboard to proceed
        </p>
      </div>

      {/* Buttons Section */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="space-y-4">
          <Link to="/userdashboard">
            <button className="w-full text-left px-4 py-3  bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200">
              User Dashboard
            </button>
          </Link>
          <Link to="/universitydashboard">
            <button className="w-full text-left px-4 py-3 mt-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200">
              University Dashboard
            </button>
          </Link>
          <Link to="/govagency">
            <button className="w-full text-left px-4 py-3 mt-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200">
              Governing Agency Dashboard
            </button>
          </Link>
          <Link to="/SPdashboard">
            <button className="w-full text-left px-4 py-3 mt-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200">
              Scholarship Provider Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
