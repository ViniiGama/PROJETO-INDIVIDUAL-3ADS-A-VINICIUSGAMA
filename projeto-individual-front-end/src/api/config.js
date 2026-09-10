// Ajuste aqui (ou via .env com VITE_API_URL) se o seu backend Spring Boot
// não estiver rodando na porta padrão 8080.
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/carros';
