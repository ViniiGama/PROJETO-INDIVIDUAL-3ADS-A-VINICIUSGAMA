import { useState } from "react";
import { cadastrarCarro } from "../../services/carroService";
import styles from "./CadastroCarro.module.css";

const CARRO_INICIAL = {
    apelido: "",
    marca: "",
    modelo: "",
    ano: "",
    cor: "",
    potenciaCv: "",
    velocidadeMaximaKmh: "",
    categoria: "Street",
};

function CadastroCarro({ aoCadastrar }) {
    const [carro, setCarro] = useState(CARRO_INICIAL);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);
    const [sucesso, setSucesso] = useState(false);

    function handleChange(evento) {
        const { name, value } = evento.target;
        setCarro((carroAtual) => ({ ...carroAtual, [name]: value }));
    }

    async function handleSubmit(evento) {
        evento.preventDefault();
        setCarregando(true);
        setErro(null);
        setSucesso(false);

        try {
            const carroFormatado = {
                ...carro,
                ano: Number(carro.ano),
                potenciaCv: Number(carro.potenciaCv),
                velocidadeMaximaKmh: Number(carro.velocidadeMaximaKmh),
            };

            const carroCriado = await cadastrarCarro(carroFormatado);

            setSucesso(true);
            setCarro(CARRO_INICIAL);
            aoCadastrar(carroCriado);
        } catch (erroCapturado) {
            setErro(erroCapturado.message);
        } finally {
            setCarregando(false);
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Cadastrar carro na garagem</h2>

            <form className={styles.formulario} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    name="apelido"
                    placeholder="Apelido (ex: Bomba Laranja)"
                    value={carro.apelido}
                    onChange={handleChange}
                    required
                />
                <input
                    className={styles.input}
                    name="marca"
                    placeholder="Marca"
                    value={carro.marca}
                    onChange={handleChange}
                    required
                />
                <input
                    className={styles.input}
                    name="modelo"
                    placeholder="Modelo"
                    value={carro.modelo}
                    onChange={handleChange}
                    required
                />
                <input
                    className={styles.input}
                    name="ano"
                    type="number"
                    placeholder="Ano"
                    value={carro.ano}
                    onChange={handleChange}
                    required
                />
                <input
                    className={styles.input}
                    name="cor"
                    placeholder="Cor"
                    value={carro.cor}
                    onChange={handleChange}
                    required
                />
                <input
                    className={styles.input}
                    name="potenciaCv"
                    type="number"
                    placeholder="Potência (cv)"
                    value={carro.potenciaCv}
                    onChange={handleChange}
                    required
                />
                <input
                    className={styles.input}
                    name="velocidadeMaximaKmh"
                    type="number"
                    placeholder="Velocidade máxima (km/h)"
                    value={carro.velocidadeMaximaKmh}
                    onChange={handleChange}
                />
                <select
                    className={styles.input}
                    name="categoria"
                    value={carro.categoria}
                    onChange={handleChange}
                >
                    <option value="Street">Street</option>
                    <option value="Circuit">Circuit</option>
                    <option value="Drag">Drag</option>
                    <option value="Drift">Drift</option>
                </select>

                <button className={styles.botao} type="submit" disabled={carregando}>
                    {carregando ? "Cadastrando..." : "Cadastrar carro"}
                </button>
            </form>

            {erro && <p className={styles.mensagemErro}>{erro}</p>}
            {sucesso && <p className={styles.mensagemSucesso}>Carro cadastrado com sucesso!</p>}
        </div>
    );
}

export default CadastroCarro;
