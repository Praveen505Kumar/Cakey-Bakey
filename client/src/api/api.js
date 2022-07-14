import axios from "axios";

const url = "http://localhost:8000/home";

export const fetchCategories = () => axios.get(url);