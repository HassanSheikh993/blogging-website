import axios from "axios";

export const api = axios.create({
    baseURL: "http://backend:8000/api", // your backend base URL
    headers: {
        "Content-Type": "application/json"
    }
})
