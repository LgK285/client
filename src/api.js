import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/contacts", // Thay bằng link Render sau khi deploy
});

export default API;
