import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    { name: 'User 1', text: 'Hyve has been a game-changer for my studies!' },
    { name: 'User 2', text: 'I love how easy it is to share and find notes.' },
    { name: 'User 3', text: 'The nectar system motivates me to contribute more.' },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="#" className="-m-1.5 p-1.5">
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

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hyve: Enrich Your Learning Experience</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A platform for students to share their study notes and materials from each cohort for better learning and collaboration.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/search" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Look at the notes</Link>
              <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-100 py-40">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-1/2">
            <div className="bg-gray-300 h-64 flex items-center justify-center">
              <p className="text-gray-600">Image Placeholder</p>
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-2xl font-bold mb-4">Hyve is for Students</h2>
            <p className="mb-4">
              Share your study materials and help your peers while earning nectars, our reward system for contributors.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">What Our Users Say</h2>
          <div className="relative max-w-2xl mx-auto">
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <ChevronLeft size={24} />
            </button>
            <div className="bg-gray-50 p-6 rounded shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-gray-300 w-12 h-12 rounded-full mr-4"></div>
                <h3 className="font-semibold">{testimonials[currentTestimonial].name}</h3>
              </div>
              <p>{testimonials[currentTestimonial].text}</p>
            </div>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded text-lg font-semibold">Contact Us</button>
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

export default LandingPage;
