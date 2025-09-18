import axios from "axios";

// Aqui 'api' é o nome do serviço no docker-compose
const api = axios.create({
  baseURL: "http://api:3000", // backend rodando no Docker
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
