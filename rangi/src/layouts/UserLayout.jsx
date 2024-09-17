import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const UserLayout = () => {
  const { isCustomer } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      <main className="flex-1 container mx-auto p-4">
        <Outlet /> {/* This renders the nested route components */}
      </main>
     
    </div>
  );
};

export default UserLayout;
