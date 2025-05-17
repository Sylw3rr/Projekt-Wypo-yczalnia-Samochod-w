// client/src/models/Car.ts
import { BaseModel } from './BaseModel';

export class Car {
  constructor(
    public id: string,
    public brand: string,
    public model: string,
    public year: number,
    public pricePerDay: number,
    public seats: number,
    public engine: string,
    public imageUrl: string,
    public availableDates: string[] = [],
    public isAvailable: boolean = true
  ) {}
}

export interface ICar {
  id: string;
  brand: string;
  model: string;
  year: number; // Zamiast productionYear
  pricePerDay: number;
  seats: number;
  engine: string;
  imageUrl: string;
  availableDates: string[];
  isAvailable: boolean; // Zamiast status
  fuelType: string;
}

export interface ICar extends Car {
  // Możesz dodać dodatkowe pola specyficzne dla interfejsu
}