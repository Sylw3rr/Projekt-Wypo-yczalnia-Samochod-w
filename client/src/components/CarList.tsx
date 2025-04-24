import { useEffect, useState } from 'react';
import { CarService } from '../services/CarService';
import { Car } from '../models/Car';

export const CarList = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    CarService.getAvailableCars().then(setCars);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Dostępne samochody</h2>
      <div className="row">
        {cars.map(car => (
          <div key={car.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{car.brand} {car.model}</h5>
                <p className="card-text">
                  Cena: {car.pricePerDay} zł/dzień<br />
                  Rok: {car.year}<br />
                  Silnik: {car.engine}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};