// frontend/src/api/CarService.ts

export interface ICar {
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  seats: number;
  engine: string;
  fuelType: string;
  imageUrl: string;
  availableDates: string[];
  isAvailable: boolean;
}

export class Car implements ICar {
  constructor(
    public id: string,
    public brand: string,
    public model: string,
    public year: number,
    public pricePerDay: number,
    public seats: number,
    public engine: string,
    public fuelType: string,
    public imageUrl: string,
    public availableDates: string[] = [],
    public isAvailable: boolean = true
  ) {}
}
const isDev = import.meta.env.DEV;
const BASE_URL = isDev ? '/api' : 'https://twój-production-api.pl';

export class CarService {
  private readonly apiUrl: string;

  constructor(apiUrl: string = '/api/cars') {
    this.apiUrl = apiUrl;
  }

  /**
   * Pobiera listę wszystkich samochodów
   */
  async getAllCars(): Promise<Car[]> {
    const response = await fetch(this.apiUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ICar[] = await response.json();
    
    return data.map(car => new Car(
      car.id,
      car.brand,
      car.model,
      car.year,
      car.pricePerDay,
      car.seats,
      car.engine,
      car.fuelType,
      car.imageUrl,
      car.availableDates,
      car.isAvailable
    ));
  }

  /**
   * Dodaje nowy samochód
   */
async addCar(carData: Omit<ICar, 'id'>, config?: RequestInit): Promise<ICar> {
    const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...config?.headers
        },
        body: JSON.stringify(carData)
    });
    
    if (!response.ok) throw new Error('Błąd serwera');
    return response.json();
}
  /**
   * Aktualizuje istniejący samochód
   */
  async updateCar(carId: string, carData: Partial<ICar>): Promise<Car> {
    const response = await fetch(`${this.apiUrl}/${carId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(carData)
    });

    if (!response.ok) {
      throw new Error(`Error updating car: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Usuwa samochód
   */
  async deleteCar(carId: string): Promise<void> {
    const response = await fetch(`${this.apiUrl}/${carId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    if (!response.ok) {
      throw new Error(`Error deleting car: ${response.statusText}`);
    }
  }

  /**
   * Pobiera pojedynczy samochód po ID
   */
  async getCarById(carId: string): Promise<Car> {
    const response = await fetch(`${this.apiUrl}/${carId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ICar = await response.json();
    return new Car(
      data.id,
      data.brand,
      data.model,
      data.year,
      data.pricePerDay,
      data.seats,
      data.engine,
      data.fuelType,
      data.imageUrl,
      data.availableDates,
      data.isAvailable
    );
  }
}