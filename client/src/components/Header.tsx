import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        AutoRent
      </Link>
      <nav className={styles.nav}>
        <Link to="/cars">Flota</Link>
        <Link to="/conditions">Warunki</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/login" className={styles.loginBtn}>
          Zaloguj
        </Link>
      </nav>
    </header>
  );
};