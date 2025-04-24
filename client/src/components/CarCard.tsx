import styles from './CarCard.module.css';

type CarCardProps = {
  brand: string;
  model: string;
  price: string;
  seats: number;
  gearbox: string;
  engine: string;
  image: string;
};

export const CarCard = ({
  brand,
  model,
  price,
  seats,
  gearbox,
  engine,
  image
}: CarCardProps) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={`${brand} ${model}`} />
      <div className={styles.details}>
        <h3>{brand} {model}</h3>
        <div className={styles.specs}>
          <span>🚗 {seats} osoby</span>
          <span>⚙️ {gearbox}</span>
          <span>🔧 {engine}</span>
        </div>
        <div className={styles.priceSection}>
          <div className={styles.price}>{price}</div>
          <button className={styles.rentBtn}>Wynajmij</button>
        </div>
      </div>
    </div>
  );
};