import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-bb20e.cloudfunctions.net/api",
  // "http://localhost:5002/clone-bb20e/us-central1/api"
});

export default instance;

