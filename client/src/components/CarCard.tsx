import React from 'react';
import { Car } from '../models/Car';

export interface CarCardProps {
  car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => (
  <div className="card h-100">
    <img
      src={car.getImageUrl()}          // ← używamy metody zamiast bezpośredniego property
      className="card-img-top"
      alt={`${car.brand} ${car.model}`}
    />
    <div className="card-body">
      <h5 className="card-title">{car.brand} {car.model}</h5>
      <p className="card-text">{car.year} • {car.engine}</p>
      <p className="card-text"><strong>{car.pricePerDay} PLN/dzień</strong></p>
    </div>
  </div>
);
