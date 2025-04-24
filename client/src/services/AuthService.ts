import { User } from '../models/User';
import axios from 'axios';

export class AuthService {
  private static API_URL = import.meta.env.VITE_API_URL;

  static async login(email: string, password: string): Promise<User> {
    const response = await axios.post(`${this.API_URL}/login`, { email, password });
    return new User(response.data.email, '', response.data.firstName, response.data.lastName);
  }
}