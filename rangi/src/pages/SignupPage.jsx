import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const SignupPage = ({ isCustomer }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signup, login } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const endpoint = isCustomer === "yes" ? 'http://localhost:8000/customers' : 'http://localhost:8000/professionals';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Extract user data or any token from the response if necessary
        const user = await response.json();
        
        // Automatically log in the user
        login(user.role, isCustomer === "yes", user.name);
        localStorage.setItem('authToken', 'dummy-token'); // Or use actual token if provided
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('isCustomer', isCustomer === "yes");
        localStorage.setItem('UserName', user.name);
        
        // Redirect to dashboard or home page
        navigate(`/dashboard/${user.name}`);
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error occurred during signup');
    }
  };

  const color = isCustomer === "yes" ? 'bg-customer-color' : 'bg-pro-color';
  const border = isCustomer === "yes" ? 'border-customer-color' : 'border-pro-color';

  return (
    <form onSubmit={handleSignup} className={`m-8 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border-8 ${border}`}>
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        {isCustomer === "yes" ? "Customer Signup" : "Professional Signup"}
      </h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className={`w-full ${color} hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        Sign Up
      </button>

      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
    </form>
  );
};

export default SignupPage;
