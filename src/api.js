import axios from "axios";

const API = axios.create({
  baseURL: "https://client-ybb6.onrender.com/api/contacts", // Thay bằng link Render sau khi deploy
});

export default API;
