import Axios from "axios";

// Chama a URL do github para não ter que chamar o tempo todo
export const api = Axios.create({
  baseURL: "https://api.github.com",
});
