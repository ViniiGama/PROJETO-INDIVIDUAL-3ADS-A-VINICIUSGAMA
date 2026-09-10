import { useEffect, useState } from 'react';
import styles from './CarroForm.module.css';

const CAMPOS_VAZIOS = {
  apelido: '',
  marca: '',
  modelo: '',
  ano: '',
  cor: '',
  potenciaCv: '',
  velocidadeMaximaKmh: '',
  categoria: 'Street',
};

const CATEGORIAS = ['Street', 'Drift', 'Drag', 'Track'];

export default function CarroForm({ carroEmEdicao, onSalvar, onCancelarEdicao, salvando }) {
  const [dados, setDados] = useState(CAMPOS_VAZIOS);

  useEffect(() => {
    if (carroEmEdicao) {
      setDados({
        apelido: carroEmEdicao.apelido ?? '',
        marca: carroEmEdicao.marca ?? '',
        modelo: carroEmEdicao.modelo ?? '',
        ano: carroEmEdicao.ano ?? '',
        cor: carroEmEdicao.cor ?? '',
        potenciaCv: carroEmEdicao.potenciaCv ?? '',
        velocidadeMaximaKmh: carroEmEdicao.velocidadeMaximaKmh ?? '',
        categoria: carroEmEdicao.categoria ?? 'Street',
      });
    } else {
      setDados(CAMPOS_VAZIOS);
    }
  }, [carroEmEdicao]);

  function handleChange(campo, valor) {
    setDados((atual) => ({ ...atual, [campo]: valor }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      apelido: dados.apelido.trim(),
      marca: dados.marca.trim(),
      modelo: dados.modelo.trim(),
      ano: Number(dados.ano),
      cor: dados.cor.trim(),
      potenciaCv: Number(dados.potenciaCv),
      velocidadeMaximaKmh: Number(dados.velocidadeMaximaKmh),
      categoria: dados.categoria,
    };

    onSalvar(payload);
  }

  const emEdicao = Boolean(carroEmEdicao);

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <div className={styles.titleBlock}>
        <p className={styles.eyebrowOrange}>{emEdicao ? 'EDITANDO REGISTRO' : 'NOVO REGISTRO'}</p>
        <h2 className={styles.cardTitle}>{emEdicao ? 'EDITAR CARRO' : 'CADASTRAR CARRO'}</h2>
      </div>
      <span className={styles.dividerAccent} />

      <div className={styles.field}>
        <label htmlFor="apelido">Apelido do carro</label>
        <input
          id="apelido"
          type="text"
          placeholder="Ex: Fantasma Laranja"
          value={dados.apelido}
          onChange={(e) => handleChange('apelido', e.target.value)}
          required
        />
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="marca">Marca</label>
          <input
            id="marca"
            type="text"
            placeholder="Nissan"
            value={dados.marca}
            onChange={(e) => handleChange('marca', e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="modelo">Modelo</label>
          <input
            id="modelo"
            type="text"
            placeholder="Skyline GT-R"
            value={dados.modelo}
            onChange={(e) => handleChange('modelo', e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="ano">Ano</label>
          <input
            id="ano"
            type="number"
            placeholder="2002"
            value={dados.ano}
            onChange={(e) => handleChange('ano', e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="cor">Cor</label>
          <input
            id="cor"
            type="text"
            placeholder="Laranja Metálico"
            value={dados.cor}
            onChange={(e) => handleChange('cor', e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="potenciaCv">Potência (CV)</label>
          <input
            id="potenciaCv"
            type="number"
            placeholder="380"
            value={dados.potenciaCv}
            onChange={(e) => handleChange('potenciaCv', e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="velocidadeMaximaKmh">Vel. máxima (km/h)</label>
          <input
            id="velocidadeMaximaKmh"
            type="number"
            placeholder="290"
            value={dados.velocidadeMaximaKmh}
            onChange={(e) => handleChange('velocidadeMaximaKmh', e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          value={dados.categoria}
          onChange={(e) => handleChange('categoria', e.target.value)}
        >
          {CATEGORIAS.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className={styles.formActions}>
        <button type="submit" className={styles.ctaButton} disabled={salvando}>
          {salvando ? 'SALVANDO…' : emEdicao ? 'SALVAR ALTERAÇÕES' : 'CADASTRAR CARRO'}
        </button>
        {emEdicao && (
          <button type="button" className={styles.ctaButtonSecondary} onClick={onCancelarEdicao}>
            CANCELAR
          </button>
        )}
      </div>
    </form>
  );
}
