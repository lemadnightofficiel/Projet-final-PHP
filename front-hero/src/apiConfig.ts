import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Remplacez par l'adresse IP correcte
  timeout: 5000, // Temps limite pour les requêtes
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
