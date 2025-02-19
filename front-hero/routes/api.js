import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api-rest";

export const getHeroes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/heroes`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des héros:", error);
    return [];
  }
};
