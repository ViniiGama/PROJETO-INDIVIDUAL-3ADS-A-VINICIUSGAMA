import { useEffect, useState } from "react";
import { listarCarros } from "../../services/carroService";
import styles from "./ListaCarros.module.css";

function ListaCarros({ atualizarQuando }) {
    const [carros, setCarros] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        buscarCarros();
    }, [atualizarQuando]);

    async function buscarCarros() {
        setCarregando(true);
        setErro(null);

        try {
            const dados = await listarCarros();
            setCarros(dados);
        } catch (erroCapturado) {
            setErro(erroCapturado.message);
        } finally {
            setCarregando(false);
        }
    }

    if (carregando) {
        return <p className={styles.status}>Carregando garagem...</p>;
    }

    if (erro) {
        return <p className={styles.erro}>{erro}</p>;
    }

    if (carros.length === 0) {
        return <p className={styles.status}>Nenhum carro cadastrado ainda.</p>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Garagem</h2>
            <div className={styles.grid}>
                {carros.map((carro) => (
                    <div className={styles.card} key={carro.idCarro}>
                        <h3 className={styles.apelido}>{carro.apelido}</h3>
                        <p className={styles.info}>{carro.marca} {carro.modelo} · {carro.ano}</p>
                        <p className={styles.info}>Cor: {carro.cor}</p>
                        <p className={styles.info}>{carro.potenciaCv} cv</p>
                        {carro.velocidadeMaximaKmh && (
                            <p className={styles.info}>{carro.velocidadeMaximaKmh} km/h</p>
                        )}
                        <span className={styles.categoria}>{carro.categoria}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaCarros;
