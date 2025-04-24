import { BaseModel } from './BaseModel';

export class Car extends BaseModel {
  constructor(
    public brand: string,
    public model: string,
    public year: number,
    public pricePerDay: number,
    public seats: number,
    public engine: string,
    public availableDates: string[] = [],
    public isAvailable: boolean = true
  ) {
    super();
  }

  // DODAJ TĘ METODĘ
  validate(): boolean {
    return this.pricePerDay > 0 && this.availableDates.length > 0;
  }

  checkAvailability(start: string, end: string): boolean {
    return this.isAvailable && 
           this.availableDates.some(date => 
             new Date(date) >= new Date(start) && 
             new Date(date) <= new Date(end)
           );
  }
}