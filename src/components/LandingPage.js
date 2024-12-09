import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Notes from "../assets/Notes.json";
import Lottie from "lottie-react";

const LandingPage = () => {
  const [theme, setTheme] = useState('dark');
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

  const toggleTheme = () => {
    setTheme(theme ===  'dark' ? 'light' : 'dark');
  };

  return (
    <div className={theme === 'dark' ? "bg-gray-900" : "bg-gray-200"}>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Hyve</span>
              <img className="h-12 w-auto" src={`${process.env.PUBLIC_URL}/hyvelogo.png`} alt="Hyve Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
            <Link to="/search" className={theme === 'dark' ? "text-sm font-semibold leading-6 text-yellow-500  hover:bg-yellow-500 hover:text-gray-900 rounded-full px-3 py-2" : "text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-900 hover:text-yellow-500 rounded-full px-3 py-2"}>
              Find Notes
            </Link>
            <Link to="/register" className={theme === 'dark' ? "text-sm font-semibold leading-6 text-yellow-500  hover:bg-yellow-500 hover:text-gray-900 rounded-full px-3 py-2" : "text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-900 hover:text-yellow-500 rounded-full px-3 py-2"}>
              Register
            </Link>
            <Link to="/login" className={theme === 'dark' ? "text-sm font-semibold leading-6 text-yellow-500  hover:bg-yellow-500 hover:text-gray-900 rounded-full px-3 py-2" : "text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-900 hover:text-yellow-500 rounded-full px-3 py-2"}>
              Sign in <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link to="/profile" className={theme === 'dark' ? "text-sm font-semibold leading-6 text-yellow-500  hover:bg-yellow-500 hover:text-gray-900 rounded-full px-3 py-2" : "text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-900 hover:text-yellow-500 rounded-full px-3 py-2"}>
              Profile
            </Link>
            <button onClick={toggleTheme} className={theme === 'dark' ? "text-sm font-semibold leading-6 text-yellow-500  hover:bg-yellow-500 hover:text-gray-900 rounded-full px-3 py-2" : "text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-900 hover:text-yellow-500 rounded-full px-3 py-2"}>
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className={theme === 'dark' ? "text-4xl font-bold tracking-tight text-yellow-500" : "text-4xl font-bold tracking-tight text-yellow-600" }>
              Hyve: Enrich Your Learning Experience
            </h1>
            <p className={theme === 'dark' ? "mt-6 text-lg leading-8 text-white" :  "mt-6 text-lg leading-8 text-black"}>

              A platform for students to share their study notes and materials from each cohort for better learning and collaboration.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/search" className={theme === 'dark' ? "rounded-md px-3.5 py-2.5 text-sm font-semibold bg-indigo-600 text-white shadow-sm hover:bg-indigo-500" : "rounded-md px-3.5 py-2.5 text-sm font-semibold bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"}>
                Look at the notes
              </Link>
              <Link to="#" className={theme === 'dark' ? "text-sm font-semibold leading-6 text-yellow-500"  : "text-sm font-semibold leading-6 text-yellow-600"}>

                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className={theme === 'dark' ? "bg-gray-200 py-3" : "bg-gray-900"}>
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-1/2">
            <Lottie animationData={Notes}/>
          </div>
          <div className="w-1/2 pl-8">
            <h2 className={theme === 'dark' ? "text-4xl font-bold mb-4 text-yellow-600" : "text-4xl font-bold mb-4 text-yellow-500"}>
              Hyve is for Students</h2>
            <p className={theme === 'dark' ? "mb-4 text-black" : "mb-4 text-white"}>
              Share your study materials and help your peers while earning nectars, our reward system for contributors.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`bg-${theme === 'dark' ? 'gray-900' : 'white'} py-12`}>
        <div className="container mx-auto">
          <h2 className={`text-2xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-yellow-500' : 'text-gray-900'}`}>
            What Our Users Say
          </h2>
          <div className="relative max-w-2xl mx-auto">
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4">
              <ChevronLeft size={24} />
            </button>
            <div className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-50'} px-20 p-6 rounded shadow-md`}>
              <div className="flex items-center mb-4"> 
                <div className={`bg-${theme === 'dark' ? 'gray-700' : 'gray-300'} w-12 h-12 rounded-full mr-4`}></div>
                <h3 className={`font-semibold px-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{testimonials[currentTestimonial].name}</h3>
              </div>
              <p className={`px-2 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{testimonials[currentTestimonial].text}</p>
            </div>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`bg-${theme === 'dark' ? 'white' : 'gray-900'} py-12`}>
        <div className="container mx-auto px-4 text-center">
          <button className={`bg-${theme === 'dark' ? 'indigo-600' : 'indigo-600'} text-white px-8 py-3 rounded text-lg font-semibold`}>Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-${theme === 'dark' ? 'gray-900' : 'gray-200'} py-4`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>&copy; 2024 Hyve. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
