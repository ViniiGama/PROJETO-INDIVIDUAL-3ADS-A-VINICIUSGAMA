import CarroCard from './CarroCard';
import styles from './CarrosGrid.module.css';

export default function CarrosGrid({ carros, carregando, onEditar, onExcluir }) {
  return (
    <section className={styles.cardsColumn}>
      <div className={styles.sectionHeader}>
        <div>
          <p className={styles.eyebrow}>FROTA REGISTRADA</p>
          <h2 className={styles.sectionTitle}>GARAGEM CADASTRADA</h2>
        </div>
        <span className={styles.countPill}>
          {carros.length} CARRO{carros.length !== 1 ? 'S' : ''}
        </span>
      </div>

      {carregando ? (
        <p className={styles.emptyState}>Carregando garagem…</p>
      ) : carros.length === 0 ? (
        <p className={styles.emptyState}>Nenhum carro cadastrado ainda. Cadastre o primeiro ao lado!</p>
      ) : (
        <div className={styles.cardsGrid}>
          {carros.map((carro) => (
            <CarroCard key={carro.idCarro} carro={carro} onEditar={onEditar} onExcluir={onExcluir} />
          ))}
        </div>
      )}
    </section>
  );
}
