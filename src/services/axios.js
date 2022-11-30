import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY5ODIzNTc5LCJleHAiOjE2Njk4NTIzNzl9.quwnvHYiEe_0M6RvINT-bUGNemntBpJcy5KFlwlHV8Y'
  }
});

export default axiosInstance;