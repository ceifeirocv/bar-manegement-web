import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY5ODkwNjQ4LCJleHAiOjE2Njk5MTk0NDh9.7sFSeThZlZhwsWrZz_bbw29zJHyuyX2UynKdCjAeQPY'
  }
});

export default axiosInstance;