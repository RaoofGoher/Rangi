import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const LoginPage = ({ isCustomer }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const endpoint = isCustomer === "yes" ? 'http://localhost:8000/customers' : 'http://localhost:8000/professionals';

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(endpoint);
      const users = await response.json();
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('authToken', 'dummy-token'); // In a real scenario, use JWT or secure token
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('isCustomer', isCustomer === "yes" ? true : false);
        localStorage.setItem('UserName', user.name);
        login(user.role, isCustomer, user.name);
        navigate('/dashboard'); // Redirect to a protected route
      } else {
        setError('Invalid email or password');
        alert('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error occurred during authentication');
      alert('Authentication failed');
    }
  };

  const color = isCustomer === "yes" ? 'bg-customer-color' : 'bg-pro-color';
  const border = isCustomer === "yes" ? 'border-customer-color' : 'border-pro-color';

  return (
    <form onSubmit={handleLogin} className={`m-8 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border-8 ${border}`}>
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">{isCustomer === "yes" ? "Customer" : "Professional"} Login</h2>

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

      <button
        type="submit"
        className={`w-full ${color} hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        Log In
      </button>

      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
    </form>
  );
};

export default LoginPage;
