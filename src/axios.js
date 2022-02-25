import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5002/clone-bb20e/us-central1/api",
});

export default instance;
