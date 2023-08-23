/* import { useState } from 'react'; */
import { Routes, Route } from 'react-router-dom';
/* import { getUser } from '../../utilities/users-service'; */
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  /* const [user, setUser] = useState(getUser()); */

  return (
    <main className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
          </Routes>
    </main>
  );
}
