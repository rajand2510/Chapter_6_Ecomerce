import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LandPlot, PenTool } from 'lucide-react';

export function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

 

  return (
    <div className="flex items-center justify-center px-4 mt-20">
   
      <div className="w-full max-w-md bg-white justify-center my-20 rounded-lg border border-gray-200 p-6">
        <div className="text-center space-y-2 mb-6">
       
          <div>
            <h2 className="text-2xl font-semibold text-green-900">Welcome back</h2>
            <p className="text-sm text-gray-500">Sign in to your account to continue</p>
          </div>
        </div>

        <form  className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="mt-1 w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="mt-1 w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none text-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-900 text-white font-medium py-2 rounded-md mt-5"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?
            <button
              onClick={() => navigate('/signup')}
              className="ml-1 hover:underline font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
