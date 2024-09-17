import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const UserLayout = () => {
  const { isCustomer } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">AppName</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="/user/dashboard" className="hover:text-blue-300">Dashboard</a>
            </li>
            <li>
              <a href={isCustomer ? "/customer-profile" : "/professional-profile"} className="hover:text-blue-300">Profile</a>
            </li>
            <li>
              <a href="/logout" className="hover:text-blue-300">Logout</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 container mx-auto p-4">
        <Outlet /> {/* This renders the nested route components */}
      </main>
      <footer className="bg-blue-800 text-white p-4 text-center">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default UserLayout;
