import { useState } from 'react';
import { CarService } from '../api/CarService';
import { ICar } from '../models/Car';

export const AdminPanel = () => {
    const [carData, setCarData] = useState<Omit<ICar, 'id'>>({
        brand: '',
        model: '',
        year: 0,
        fuelType: 'gasoline',
        pricePerDay: 0,
        seats: 5, // Poprawiona nazwa z "asset" na "seats"
        engine: '',
        imageUrl: '',
        availableDates: [], // Poprawiona nazwa z "availableDate"
        isAvailable: true
    });
    const carService = new CarService();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await carService.addCar(
                carData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` // Backtick i poprawne formatowanie
                    }
                }
            );
            alert('Samochód dodany!');
        } catch (error) {
            alert('Błąd podczas dodawania samochodu');
        }
    };

    return (
        <div className="admin-panel">
            <h2>Dodaj nowy samochód</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Marka:
                        <input
                            type="text"
                            value={carData.brand}
                            onChange={(e) => setCarData({...carData, brand: e.target.value})}
                            required
                        />
                    </label>
                </div>
                
                <div className="form-group">
                    <label>
                        Model:
                        <input
                            type="text"
                            value={carData.model}
                            onChange={(e) => setCarData({...carData, model: e.target.value})}
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Rok produkcji:
                        <input
                            type="number"
                            value={carData.year}
                            onChange={(e) => setCarData({...carData, year: Number(e.target.value)})}
                            min="2000"
                            max={new Date().getFullYear()}
                            required
                        />
                    </label>
                </div>

                <button type="submit">Dodaj samochód</button>
            </form>
        </div>
    );
};

export default AdminPanel;