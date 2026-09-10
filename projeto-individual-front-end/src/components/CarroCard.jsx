import { IconEdit, IconDelete } from './Icons';
import styles from './CarroCard.module.css';

export default function CarroCard({ carro, onEditar, onExcluir }) {
  return (
    <div className={styles.carCard}>
      <div className={styles.carPhoto}>
        <div className={styles.carPhotoTop}>
          <span className={styles.categoryBadge}>{carro.categoria}</span>
          <div className={styles.iconRow}>
            <button
              type="button"
              className={`${styles.iconBtn} ${styles.iconBtnEdit}`}
              onClick={() => onEditar(carro)}
              aria-label={`Editar ${carro.apelido}`}
            >
              <IconEdit size={13} />
            </button>
            <button
              type="button"
              className={`${styles.iconBtn} ${styles.iconBtnDelete}`}
              onClick={() => onExcluir(carro.idCarro)}
              aria-label={`Excluir ${carro.apelido}`}
            >
              <IconDelete size={13} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.carContent}>
        <h3 className={styles.carName}>{carro.apelido}</h3>
        <p className={styles.carModel}>{carro.marca} · {carro.modelo}</p>
        <div className={styles.thinDivider} />
        <div className={styles.statsGrid}>
          <div>
            <p className={styles.statLabel}>Ano</p>
            <p className={styles.statValue}>{carro.ano}</p>
          </div>
          <div>
            <p className={styles.statLabel}>Cor</p>
            <p className={styles.statValue}>{carro.cor}</p>
          </div>
          <div>
            <p className={styles.statLabel}>Potência</p>
            <p className={styles.statValue}>{carro.potenciaCv} CV</p>
          </div>
          <div>
            <p className={styles.statLabel}>Vel. máx</p>
            <p className={styles.statValue}>{carro.velocidadeMaximaKmh} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
