import { CarCard } from './CarCard';
import styles from './CarGrid.module.css';

const cars = [
  {
    id: 1,
    brand: 'Skoda',
    model: 'Octavia',
    price: '159 zł/dzień',
    seats: 5,
    gearbox: 'Automat',
    engine: '1.6 TDI',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800'
  },
  {
    id: 2,
    brand: 'Volkswagen',
    model: 'Golf',
    price: '139 zł/dzień',
    seats: 5,
    gearbox: 'Manualna',
    engine: '1.5 TSI',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800'
  }
];

export const CarGrid = () => {
  return (
    <div className={styles.carGrid}>
      <div className={styles.filters}>
        <select className={styles.filterSelect}>
          <option>Wszystkie marki</option>
          <option>Skoda</option>
          <option>Volkswagen</option>
        </select>
        
        <div className={styles.dateFilters}>
          <input type="date" className={styles.dateInput} />
          <input type="date" className={styles.dateInput} />
        </div>
      </div>

      <div className={styles.gridContainer}>
        {cars.map(car => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};