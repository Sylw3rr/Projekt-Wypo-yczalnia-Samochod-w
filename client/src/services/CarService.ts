import { Car } from '../models/Car';
import axios from 'axios';

export class CarService {
  private static API_URL = import.meta.env.VITE_API_URL;

  static async getAvailableCars(): Promise<Car[]> {
    const response = await axios.get(`${this.API_URL}/cars?isAvailable=true`);
    return response.data.map((car: any) => new Car(
      car.brand,
      car.model,
      car.year,
      car.pricePerDay,
      car.seats,
      car.engine,
      car.availableDates,
      car.isAvailable
    ));
  }
}