import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Import supabase client
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setError(error.message); // Show the error if authentication fails
      } else {
        console.log("Login successful", data);
        // Handle successful login (e.g., redirect to dashboard)
      }
    } catch (err) {
      console.error('Unexpected error', err);
      setError('Unexpected error occurred. Please try again.');
    }
  };

  // Initialize the Google Sign-In button
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google client ID
      callback: handleOAuthLogin,
    });
    
    google.accounts.id.renderButton(
      document.getElementById('g_id_signin'),
      { theme: 'outline', size: 'large' } // Customize button options
    );
  }, []);

  // Function for signing in with Google OAuth
  const handleOAuthLogin = async (response) => {
    const credential = response.credential;

    // Use the credential to sign in with Supabase
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      accessToken: credential,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("Google login successful", data);
      // Handle successful login (e.g., redirect to dashboard)
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              alt="Your Company"
              src={`${process.env.PUBLIC_URL}/hyvelogo.png`}
              className="mx-auto h-12 w-auto"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter email"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                <svg className="shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter password"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                <svg className="shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                  <circle cx="16.5" cy="7.5" r=".5"></circle>
                </svg>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Sign in
              </button>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Or sign in with
          </p>

          <div className="mt-2 mb-4 border-t border-gray-300"></div>

          {/* Google sign-in button div */}
          <div id="g_id_onload"
               data-client_id="834232755995-b50vhecb9an2b0lj75l2jcuqbd8k7aul.apps.googleusercontent.com" // Replace with your Google client ID
               data-context="signin"
               data-ux_mode="popup"
               data-callback="handleOAuthLogin"
               data-auto_prompt="false">
          </div>
          <div id="g_id_signin"
               className="g_id_signin"
               data-type="standard"
               data-shape="rectangular"
               data-theme="outline"
               data-text="signin_with"
               data-size="large"
               data-logo_alignment="left">
          </div>

          <button
            onClick={() => handleOAuthLogin('discord')}
            className="flex w-full justify-center rounded-md bg-purple-700 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mt-4"
          >
            Sign in with Discord
          </button>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign up here
            </Link>
          </p>

          <p className="mt-4 text-center text-sm text-gray-500">
            <Link to="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Back to Homepage
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
