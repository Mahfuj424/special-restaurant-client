
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/Home/Shared/Navbar/Navbar';
import Footer from '../pages/Home/Home/Shared/Footer/Footer';

const Main = () => {
     return (
          <div>
               <Navbar/>
               <Outlet />
               <Footer/>
          </div>
     );
};

export default Main;