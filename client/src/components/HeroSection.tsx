import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Wynajem samochodów premium</h1>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Wyszukaj model..." />
          <button>Szukaj</button>
        </div>
      </div>
    </section>
  );
};