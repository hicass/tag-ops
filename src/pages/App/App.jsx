/* import { useState } from 'react'; */
import { Routes, Route } from 'react-router-dom';
/* import { getUser } from '../../utilities/users-service'; */
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from'../AboutPage/AboutPage';
import PricePage from '../PricePage/PricePage';
import ContactPage from '../ContactPage/ContactPage';


export default function App() {
  /* const [user, setUser] = useState(getUser()); */

  return (
    <main className='App'>
          <NavBar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/prices' element={<PricePage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <Footer />
    </main>
  );
}
