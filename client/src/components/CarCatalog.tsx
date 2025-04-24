import { useEffect, useState } from 'react';
import axios from 'axios';

interface Car {
  _id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
}

export const CarCatalog = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const loadCars = async () => {
      const response = await axios.get('/api/cars');
      setCars(response.data);
    };
    loadCars();
  }, []);

  return (
    <div className="car-catalog">
      <h2>Available Cars</h2>
      <div className="cars-grid">
        {cars.map(car => (
          <div key={car._id} className="car-card">
            <h3>{car.brand} {car.model}</h3>
            <p>Year: {car.year}</p>
            <p>Price: ${car.pricePerDay}/day</p>
            <button>Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};