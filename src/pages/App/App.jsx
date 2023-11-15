import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from'../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import HrPage from '../HrPage/HrPage';
import OpsPage from '../OpsPage/OpsPage';
import FinancePage from '../FinancePage/FinancePage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';


export default function App() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShouldAnimate(window.innerWidth > 770);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className='App'>
          <NavBar shouldAnimate={shouldAnimate} />

          <Routes>
            <Route path='/' element={<LandingPage shouldAnimate={shouldAnimate} />} />
            <Route path='/about' element={<AboutPage shouldAnimate={shouldAnimate} />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/human-resources' element={<HrPage />} />
            <Route path='/operations' element={<OpsPage />} />
            <Route path='/finance' element={<FinancePage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
          
          <Footer />
    </main>
  );
}
