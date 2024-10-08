import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col">
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <User className="mr-2" />
        </div>
        <nav>
          <Link to="/login" className="mx-2">Sign in</Link>
          <Link to="/register" className="mx-2">Register</Link>
          <Link to="/search" className="mx-2">Find Notes</Link>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12 flex items-center">
          <div className="w-1/2 pr-8">
            <h1 className="text-4xl font-bold mb-4">Hyve</h1>
            <p className="text-xl mb-4">Tagline</p>
            <p className="mb-6">Hyve keren bgt anjay</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              Look at the notes
            </button>
          </div>
          <div className="w-1/2">
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <p className="text-gray-600">Image Placeholder</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 flex items-center">
            <div className="w-1/2">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <p className="text-gray-600">Image Placeholder</p>
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <h2 className="text-2xl font-bold mb-4">Hyve is ...</h2>
              <p className="mb-4">
                A platform for students to share their notes and materials from each cohort for studying purposes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Share notes and earn nectars!</h2>
            <p className="mb-6">
              Contribute your study materials to help others and earn rewards in the process.
            </p>
            <button className="bg-green-500 text-white px-6 py-2 rounded">
              CTA
            </button>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Testimony</h2>
            <div className="relative max-w-2xl mx-auto">
              <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <ChevronLeft size={24} />
              </button>
              <div className="bg-white p-6 rounded shadow-md">
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

        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <button className="bg-blue-500 text-white px-8 py-3 rounded text-lg font-semibold">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Hyve. All rights reserved.</p>
        </div>
      </footer>



    </div>
  );
};

export default LandingPage;