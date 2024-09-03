import axios from 'axios';

var token = localStorage.getItem('token');

const Url = () => {
  if (import.meta.env.MODE === 'development') {
    console.log("development")
    return import.meta.env.VITE_URL_API
  } else if (import.meta.env.MODE === 'production') {
    console.log("production")
    return import.meta.env.VITE_LOCAL_URL_API
  }
}

const api = axios.create({
  baseURL: Url(),
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;