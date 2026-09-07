import { useState } from "react";
import CadastroCarro from "./components/CadastroCarro/CadastroCarro";
import ListaCarros from "./components/ListaCarros/ListaCarros";
import styles from "./App.module.css";

function App() {
    const [contadorAtualizacao, setContadorAtualizacao] = useState(0);

    function handleCarroCadastrado() {
        setContadorAtualizacao((valorAtual) => valorAtual + 1);
    }

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <h1 className={styles.tituloApp}>🏁 Garagem NFS Underground</h1>
            </header>

            <main className={styles.main}>
                <CadastroCarro aoCadastrar={handleCarroCadastrado} />
                <ListaCarros atualizarQuando={contadorAtualizacao} />
            </main>
        </div>
    );
}

export default App;
