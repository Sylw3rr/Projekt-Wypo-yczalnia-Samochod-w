import { BaseModel } from './BaseModel';

export class Car extends BaseModel {
  constructor(
    public brand: string,
    public model: string,
    public year: number,
    public pricePerDay: number,
    public seats: number,
    public engine: string,
    public imageUrl: string,               // ← NOWE
    public availableDates: string[] = [],
    public isAvailable: boolean = true
  ) {
    super();
  }

  validate(): boolean {
    return this.pricePerDay > 0 && this.availableDates.length > 0;
  }

  checkAvailability(start: string, end: string): boolean {
    return (
      this.isAvailable &&
      this.availableDates.some((date) => {
        const d = new Date(date);
        return d >= new Date(start) && d <= new Date(end);
      })
    );
  }

  // Jeżeli TypeScript dalej będzie marudził na 'imageUrl' jako nieużywane wewnątrz klasy,
  // możesz dodać prostą metodę, która je „użyje”:
  getImageUrl(): string {
    return this.imageUrl;
  }
}
