import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://deploy-task-api.onrender.com/', 
  headers: {
    'Content-Type': 'application/json',
  },
});