# 🏁 Underground Garage — Front-end

## SPTech — São Paulo Tech School

### Projeto Integrador — Front-end e Programação Web

**Aluno:** Vinícius de Santana Gama
**Curso:** Análise e Desenvolvimento de Sistemas — 3º Semestre
**Tema:** Automóveis
**Projeto:** Underground Garage

---

## Descrição

O **Underground Garage** é uma aplicação web inspirada na temática de carros personalizados e corridas de rua presente em jogos como **Need for Speed Underground**.

O projeto tem como objetivo permitir que o usuário mantenha uma garagem virtual, podendo **cadastrar e visualizar veículos**, consultando informações como marca, modelo, ano, potência, velocidade máxima, categoria, cor e tipo de tração.

A aplicação foi desenvolvida em **React** e integrada a uma **API REST desenvolvida em Java com Spring Boot**, responsável pelo processamento, validação e persistência dos dados em banco de dados relacional.

O projeto foi desenvolvido como parte do **Projeto Integrador individual das disciplinas de Front-end e Programação Web**, atendendo aos requisitos de integração entre cliente e API.

---

## Objetivos

* Desenvolver uma aplicação web utilizando React.
* Criar uma interface para cadastro, atualização, exclusão e visualização de automóveis.
* Consumir uma API REST por meio dos métodos HTTP definidos pelo projeto.
* Utilizar componentes reutilizáveis e gerenciamento de estado.
* Trabalhar com dados persistidos no banco de dados, sem utilização de dados estáticos como fonte principal.
* Desenvolver uma interface visual inspirada na estética de corridas urbanas e personalização automotiva.

---

## Funcionalidades

A aplicação contará com as seguintes funcionalidades principais:

* Visualização dos carros cadastrados na garagem.
* Cadastro de novos carros.
* Visualização dos detalhes de um carro.
* Exclusão de carros cadastrados.
* Exibição de estados de carregamento durante as requisições.
* Tratamento de erros durante a comunicação com a API.
* Atualização da interface após operações realizadas com sucesso.

---

## Tecnologias utilizadas

* **React**
* **JavaScript**
* **JSX**
* **Vite**
* **CSS Modules**
* **HTML5**
* **CSS3**
* **API REST**

---

## Conceitos de React utilizados

O projeto utiliza os principais conceitos solicitados na disciplina:

* Componentização em React.
* JSX para construção das interfaces.
* Gerenciamento de estado com `useState`.
* Comunicação com API REST.
* Tratamento de estados de carregamento, sucesso e erro.
* CSS Modules para estilização isolada dos componentes.

---

## Integração com o Back-end

O Front-end consome a API REST desenvolvida no projeto de Programação Web.

**Repositório do Back-end:**

[PROJETO-INDIVIDUAL-3ADS-A-VINICIUSGAMA-BACK-END](https://github.com/ViniiGama/PROJETO-INDIVIDUAL-3ADS-A-VINICIUSGAMA-BACK-END)

Os dados exibidos na aplicação são obtidos por meio da API e os dados cadastrados pelo usuário são enviados ao back-end para persistência no banco de dados.

---

## 🔧 Pré-requisitos

Para executar o projeto localmente, é necessário possuir instalado:

* Node.js
* npm

Recomenda-se utilizar uma versão atual do Node.js compatível com o Vite utilizado no projeto.

---

## ▶️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/ViniiGama/PROJETO-INDIVIDUAL-3ADS-A-VINICIUSGAMA.git
```

### 2. Acesse a pasta do Front-end

```bash
cd PROJETO-INDIVIDUAL-3ADS-A-VINICIUSGAMA/projeto-individual-front-end
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

```bash
npm run dev
```

Após iniciar o servidor, acesse a URL informada pelo Vite no terminal.

> Para o funcionamento completo da aplicação, a API do projeto de Back-end também deverá estar em execução.

---

## 🔌 API

Endpoints utilizados pelo Front-end:

| Método   | Endpoint       | Descrição                    |
| -------- | -------------- | ---------------------------- |
| `GET`    | `/carros`      | Lista os carros cadastrados  |
| `GET`    | `/carros/{id}` | Consulta um carro específico |
| `POST`   | `/carros`      | Cadastra um novo carro       |
| `DELETE` | `/carros/{id}` | Remove um carro cadastrado   |

A documentação detalhada do contrato da API está disponível no README do projeto de Back-end.

---

## 👨‍💻 Autor

**Vinícius de Santana Gama**

GitHub: [ViniiGama](https://github.com/ViniiGama)

---

## 📄 Licença

Projeto acadêmico desenvolvido para a SPTECH.
