import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginNavbar from '../components/LoginNavbar';
import Footer from '../components/Footer';


const MainLayout = () => {
  return (
    <div className="main-layout">
      <LoginNavbar />
      <div className="content">
        <Outlet />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default MainLayout;
