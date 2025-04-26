// client/src/components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
  <footer className="bg-dark text-light py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>O nas</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">O AAA AUTO</a></li>
            <li><a href="#" className="text-light">Kariera</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Obsługa klienta</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">Kontakt</a></li>
            <li><a href="#" className="text-light">Reklamacje</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Social</h5>
          <a href="#" className="text-light me-2">Facebook</a>
          <a href="#" className="text-light">Instagram</a>
        </div>
      </div>
      <div className="text-center mt-3">
        © 2025 TwojaFirma. Wszelkie prawa zastrzeżone.
      </div>
    </div>
  </footer>
  );
};
export default Footer;
