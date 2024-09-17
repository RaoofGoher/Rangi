import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useParams
} from 'react-router-dom';
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import './index.css';

import NotFoundPage from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import Customer from './pages/Customer';
import Professional from './pages/Professional';
import SecondaryLayout from './layouts/SecondaryLayout';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard'; // Import protected route component
import ProtectedRoute from './components/ProtectedRoutes'; // Import ProtectedRoute component
import UserLayout from './layouts/UserLayout'

function App() {

 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<SecondaryLayout />}>
          <Route path="/login/customer" element={<LoginPage isCustomer="yes" />} />
          <Route path="/login/professional" element={<LoginPage isCustomer="no" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/dashboard/:username" element={<ProtectedRoute element={<Dashboard />} />} />

       

        
      </>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
