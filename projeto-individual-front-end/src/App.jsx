import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarroForm from './components/CarroForm';
import CarrosGrid from './components/CarrosGrid';
import { listarCarros, criarCarro, atualizarCarro, excluirCarro, mensagemDeErro } from './api/carrosApi';
import styles from './App.module.css';

export default function App() {
  const [carros, setCarros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [carroEmEdicao, setCarroEmEdicao] = useState(null);
  const [mensagem, setMensagem] = useState(null); // { tipo: 'erro' | 'sucesso', texto }

  useEffect(() => {
    carregarCarros();
  }, []);

  async function carregarCarros() {
    setCarregando(true);
    try {
      const lista = await listarCarros();
      setCarros(lista ?? []);
    } catch (error) {
      setMensagem({ tipo: 'erro', texto: mensagemDeErro(error, 'carregar') });
    } finally {
      setCarregando(false);
    }
  }

  async function handleSalvar(dadosCarro) {
    setSalvando(true);
    setMensagem(null);
    try {
      if (carroEmEdicao) {
        const atualizado = await atualizarCarro(carroEmEdicao.idCarro, dadosCarro);
        setCarros((atual) =>
          atual.map((c) => (c.idCarro === carroEmEdicao.idCarro ? atualizado : c))
        );
        setMensagem({ tipo: 'sucesso', texto: `"${atualizado.apelido}" atualizado com sucesso.` });
        setCarroEmEdicao(null);
      } else {
        const criado = await criarCarro(dadosCarro);
        setCarros((atual) => [criado, ...atual]);
        setMensagem({ tipo: 'sucesso', texto: `"${criado.apelido}" cadastrado na garagem.` });
      }
    } catch (error) {
      setMensagem({ tipo: 'erro', texto: mensagemDeErro(error, carroEmEdicao ? 'atualizar' : 'cadastrar') });
    } finally {
      setSalvando(false);
    }
  }

  async function handleExcluir(id) {
    const confirmou = window.confirm('Remover este carro da garagem?');
    if (!confirmou) return;

    try {
      await excluirCarro(id);
      setCarros((atual) => atual.filter((c) => c.idCarro !== id));
      if (carroEmEdicao?.idCarro === id) setCarroEmEdicao(null);
    } catch (error) {
      setMensagem({ tipo: 'erro', texto: mensagemDeErro(error, 'excluir') });
    }
  }

  function handleEditar(carro) {
    setCarroEmEdicao(carro);
    setMensagem(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleCancelarEdicao() {
    setCarroEmEdicao(null);
  }

  return (
    <div className={styles.page}>
      <Header />
      <Hero />

      {mensagem && (
        <div className={`${styles.banner} ${mensagem.tipo === 'erro' ? styles.bannerErro : styles.bannerSucesso}`}>
          {mensagem.texto}
        </div>
      )}

      <main className={styles.mainContent}>
        <CarroForm
          carroEmEdicao={carroEmEdicao}
          onSalvar={handleSalvar}
          onCancelarEdicao={handleCancelarEdicao}
          salvando={salvando}
        />

        <CarrosGrid
          carros={carros}
          carregando={carregando}
          onEditar={handleEditar}
          onExcluir={handleExcluir}
        />
      </main>
    </div>
  );
}
