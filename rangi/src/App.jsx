import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import './index.css'


import NotFoundPage from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import Customer from './pages/Customer';
import Professional from './pages/Professional';
import SecondaryLayout from './layouts/SecondaryLayout';
import LoginPage from './pages/loginPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<>
      <Route path = "/" element={<MainLayout/>}  >
      
        <Route path='*' element={<NotFoundPage />} />
        
      </Route>
      <Route path = "/login" element={<SecondaryLayout/>}>
      <Route path='/login/customer' element={<Customer />} />
      <Route path='/login/professional' element={<Professional />} />
    

      <Route path='*' element={<NotFoundPage />} />
      </Route>
      <Route path='/loginn' element={<LoginPage />} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />)
}

export default App
