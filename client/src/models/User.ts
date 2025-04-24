import { BaseModel } from './BaseModel';

export class User extends BaseModel {
  private password: string;

  constructor(
    public email: string,
    password: string,
    public firstName: string = '',
    public lastName: string = '',
    public rentals: string[] = []
  ) {
    super();
    this.password = password;
  }

  validate(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email) && this.password.length >= 8;
  }
}