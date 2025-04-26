import React from 'react';
import { CarCard } from './CarCard';
import { Car } from '../models/Car';

interface CarGridProps {
  cars: Car[];
}

export const CarGrid: React.FC<CarGridProps> = ({ cars }) => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {cars.map((car, idx) => (
          <div key={idx} className="col-sm-6 col-md-4 col-lg-3">
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};