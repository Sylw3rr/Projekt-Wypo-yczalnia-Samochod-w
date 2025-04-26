// client/src/components/Hero.tsx
import React from 'react';

export const Hero: React.FC = () => {
  return (
  <section className="hero-section text-white d-flex align-items-center"
           style={{ background: "url('/assets/hero-bg.jpg') center/cover" }}>
    <div className="container py-5">
      <h1 className="display-4">Znajdź idealny samochód</h1>
      <form className="row g-2 mt-4">
        <div className="col-md-3">
          <select className="form-select">
            <option>Wybierz markę</option>
            {/* …opcje… */}
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>Wybierz model</option>
          </select>
        </div>
        <div className="col-md-2">
          <input type="number" className="form-control" placeholder="Cena od" />
        </div>
        <div className="col-md-2">
          <input type="number" className="form-control" placeholder="Cena do" />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-warning w-100">Szukaj</button>
        </div>
      </form>
    </div>
  </section>
  );
};
export default Hero;