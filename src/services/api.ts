import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Authorization: "",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export { API };
