import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { CarGrid } from './components/CarGrid';
import Footer from './components/Footer';
import { Car } from './models/Car';

// Jeżeli masz hooka lub fetch do pobierania aut, w miejsce poniższej tablicy wrzuć dane:
const sampleCars: Car[] = [];

const App: React.FC = () => {
  return (
    <>
      <Header />

      {/* Zapobiegamy nachodzeniu fixed-top */}
      <div style={{ marginTop: '80px' }}>
        <HeroSection />
        <CarGrid cars={sampleCars} />
      </div>

      <Footer />
    </>
  );
};

export default App;