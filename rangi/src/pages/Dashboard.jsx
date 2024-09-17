import React from 'react';
import { useAuth } from '../components/AuthContext';

const Dashboard = () => {
  const { role, isCustomer, userName } = useAuth();
  console.log(role, isCustomer, userName);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {isCustomer === "yes" ? "Customer" : "Professional"} {userName}</p>
      <p>Role::::: {role}</p>
    </div>
  );
};

export default Dashboard;
