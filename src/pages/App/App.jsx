import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from'../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import HrPage from '../HrPage/HrPage';
import OpsPage from '../OpsPage/OpsPage';
import FinancePage from '../FinancePage/FinancePage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';


export default function App() {
  return (
    <main className='App'>
          <NavBar />

          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutPage />} />
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
