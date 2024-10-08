import React from 'react';
import { Link } from 'react-router-dom';

const SearchNotes = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Hyve</span>
              <img className="h-8 w-auto" src="https://pbs.twimg.com/media/GZZwRO0aUAEEiv5?format=jpg&name=4096x4096" alt="Hyve Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to="/search" className="text-sm font-semibold leading-6 text-gray-900">Find Notes</Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
            <Link to="/register" className="text-sm font-semibold leading-6 text-gray-900">Register</Link>
            <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">Sign in <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </nav>
      </header>

      {/* Search and Filters Section */}
      <section className="pt-28 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search and filters"
            className="w-full py-3 px-6 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
      </section>

      {/* Popular Notes Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Most Popular in Business */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Most popular in Business</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Placeholder for each note */}
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="bg-gray-200 h-48 rounded-md">
                  <p className="text-center py-16">Note Placeholder</p>
                </div>
              ))}
            </div>
          </div>

          {/* Most Popular in Computer Science */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Most popular in Computer Science</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Placeholder for each note */}
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="bg-gray-200 h-48 rounded-md">
                  <p className="text-center py-16">Note Placeholder</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Hyve. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SearchNotes;
