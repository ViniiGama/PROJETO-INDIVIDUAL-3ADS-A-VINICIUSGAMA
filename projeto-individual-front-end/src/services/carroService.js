const API_URL = "http://localhost:8080/carros";

export async function listarCarros() {
    const resposta = await fetch(API_URL);

    if (!resposta.ok) {
        throw new Error("Não foi possível carregar os carros.");
    }

    return resposta.json();
}

export async function cadastrarCarro(carro) {
    const resposta = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carro),
    });

    if (!resposta.ok) {
        if (resposta.status === 400) {
            throw new Error("Dados inválidos. Confira os campos preenchidos.");
        }
        if (resposta.status === 409) {
            throw new Error("Já existe um carro cadastrado com esse apelido.");
        }
        throw new Error("Não foi possível cadastrar o carro.");
    }

    return resposta.json();
}
