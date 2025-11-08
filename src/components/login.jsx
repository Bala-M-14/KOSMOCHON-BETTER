import { useState } from 'react';
import React from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="py-12 px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to access your account</p>
          </div>

          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
              Sign In
            </button>

            <div className="text-center mt-6">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Forgot password?
              </a>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">or</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Don't have an account?{' '}
                <a href="#" className="text-blue-500 hover:underline font-semibold">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2025 Koshmochon Store. All rights reserved.</p>
          <p className="text-gray-400">123, H-Block 5th Street, Anna Nagar, Chennai</p>
        </div>
      </footer>
    </div>
  );
}