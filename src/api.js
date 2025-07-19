import axios from "axios";

const API = axios.create({
  baseURL: "https://contact-api.onrender.com/api", // Thay bằng link Render sau khi deploy
});

export default API;
