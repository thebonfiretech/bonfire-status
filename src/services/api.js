import axios from 'axios';

var token = localStorage.getItem('token');

const api = axios.create({
  baseURL: "https://a76ce1f6-fbb0-40e3-a052-5a28b1e161f0-00-2z2e4d3cjmkhr.kirk.replit.dev/v1",
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;