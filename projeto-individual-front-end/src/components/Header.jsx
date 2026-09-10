import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* <span className={styles.logoMark} /> */}
        <span className={styles.logoText}>UNDERGROUND GARAGE</span>
      </div>
      {/* <div className={styles.statusPill}>
        <span className={styles.statusDot} />
        GARAGEM ONLINE
      </div> */}
    </header>
  );
}
