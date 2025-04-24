import { Link } from 'react-router-dom';
import styles from './CarDetails.module.css';
import SeatIcon from '../../assets/seat-icon.svg';
import EngineIcon from '../../assets/engine-icon.svg';
import FuelIcon from '../../assets/fuel-icon.svg';

const CarDetails = () => {
  return (
    <div className={styles.carContainer}>
      {/* Skoda Octavia */}
      <div className={styles.carCard}>
        <h2 className={styles.carTitle}>Škoda Octavia</h2>
        <ul className={styles.specList}>
          <li className={styles.specItem}>
            <img src={SeatIcon} alt="Ilość miejsc" className={styles.specIcon} />
            5 miejsc | Automatyczna skrzynia biegów
          </li>
          <li className={styles.specItem}>
            <img src={EngineIcon} alt="Silnik" className={styles.specIcon} />
            1.6 TDI | 116 KM
          </li>
          <li className={styles.specItem}>
            <img src={FuelIcon} alt="Paliwo" className={styles.specIcon} />
            Diesel | 4.1 l/100km
          </li>
        </ul>
        <div className={styles.priceTag}>159 zł/dzień</div>
        <Link to="/rent/1" className={styles.rentButton}>Wynajmij teraz</Link>
      </div>

      {/* Volkswagen Golf */}
      <div className={styles.carCard}>
        <h2 className={styles.carTitle}>Volkswagen Golf</h2>
        <ul className={styles.specList}>
          <li className={styles.specItem}>
            <img src={SeatIcon} alt="Ilość miejsc" className={styles.specIcon} />
            5 miejsc | Manualna skrzynia biegów
          </li>
          <li className={styles.specItem}>
            <img src={EngineIcon} alt="Silnik" className={styles.specIcon} />
            1.5 TSI | 150 KM
          </li>
          <li className={styles.specItem}>
            <img src={FuelIcon} alt="Paliwo" className={styles.specIcon} />
            Benzyna | 5.3 l/100km
          </li>
        </ul>
        <div className={styles.priceTag}>139 zł/dzień</div>
        <Link to="/rent/2" className={styles.rentButton}>Wynajmij teraz</Link>
      </div>
    </div>
  );
};

export default CarDetails;