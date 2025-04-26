// client/src/components/Header.tsx
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/">TwojeLogo</a>
      <button className="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><a className="nav-link" href="#">Oferta</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Promocje</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Kontakt</a></li>
        </ul>
        <button className="btn btn-primary">Zaloguj się</button>
      </div>
    </div>
  </nav>
  </header>
  );
};

export default Header;
