import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.glow} ${styles.glowOrange}`} />
      <div className={`${styles.glow} ${styles.glowCyan}`} />
      <div className={`${styles.streak} ${styles.streak1}`} />
      <div className={`${styles.streak} ${styles.streak2}`} />
      <div className={`${styles.streak} ${styles.streak3}`} />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>STREET RACING • TUNING • VELOCIDADE</p>
        <h1 className={styles.heroTitle}>SUA GARAGEM. SUAS REGRAS.</h1>
      </div>
    </section>
  );
}
