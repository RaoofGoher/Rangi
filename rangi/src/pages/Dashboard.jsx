import React from 'react';

import { useAuth } from '../components/AuthContext';

import { useParams } from 'react-router-dom';
import LoggedInNavbar from '../components/LoggedInNavbar';

const Dashboard = () => {
  const { username } = useParams();
  const { role, isCustomer, userName } = useAuth();
  
  return (
    <div>
      <LoggedInNavbar/>
      <h1>Dashboard</h1>
      <p>Welcome {isCustomer === "yes" ? "Customer" : "Professional"} {userName}</p>
      <p>Role::::: {role}</p>
      
    </div>
  );
};

export default Dashboard;
