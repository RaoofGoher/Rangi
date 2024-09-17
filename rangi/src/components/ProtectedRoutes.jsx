import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { authenticated } = useAuth();
  const location = useLocation();

  if (!authenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Render the component if authenticated
  return Component;
};

export default ProtectedRoute;
