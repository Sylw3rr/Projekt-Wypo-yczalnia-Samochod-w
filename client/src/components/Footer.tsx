import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {/* ... istniejąca zawartość ... */}
      </div>
      <div className={styles.copy}>
        © 2024 AutoRent Żory. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};