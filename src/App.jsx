import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import HomePage from './pages/Home/Home';
import Reservations from './pages/Reservations/Reservations';
import Menu from './pages/Menu/Menu';

function App() {
  const [reservations, setReservations] = useState([]);
  const addReservation = (newReservation) => {
    setReservations((prev) => [...prev, newReservation]);
  };
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage addReservation={addReservation} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations reservations={reservations} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
