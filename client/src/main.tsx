import React from 'react'; // Dodaj ten import
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* Teraz React jest dostępny */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);