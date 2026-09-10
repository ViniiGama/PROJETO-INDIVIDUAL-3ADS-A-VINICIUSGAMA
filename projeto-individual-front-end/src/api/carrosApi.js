import { API_URL } from './config';

/**
 * Trata a resposta do backend Spring Boot.
 * O backend retorna .build() sem corpo em 400/404/409, então
 * traduzimos o status HTTP em mensagens amigáveis no chamador.
 */
async function handleResponse(response) {
  if (response.status === 204) return null; // DELETE bem-sucedido, sem corpo

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const error = new Error('Erro na requisição');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export async function listarCarros() {
  const response = await fetch(API_URL);
  return handleResponse(response);
}

export async function buscarCarroPorId(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return handleResponse(response);
}

export async function criarCarro(carro) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(carro),
  });
  return handleResponse(response);
}

export async function atualizarCarro(id, carro) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(carro),
  });
  return handleResponse(response);
}

export async function excluirCarro(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  return handleResponse(response);
}

/**
 * Traduz o status HTTP retornado pelo backend em uma mensagem
 * amigável para exibir na interface.
 */
export function mensagemDeErro(error, contexto = 'salvar') {
  switch (error?.status) {
    case 400:
      return 'Verifique os campos: ano não pode ser futuro, e potência deve ser maior que zero.';
    case 404:
      return 'Carro não encontrado (pode já ter sido removido).';
    case 409:
      return 'Já existe um carro cadastrado com esse apelido.';
    default:
      return `Não foi possível ${contexto} o carro. Verifique se o backend está rodando.`;
  }
}
