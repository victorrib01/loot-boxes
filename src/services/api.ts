import axios from 'axios';

const api = axios.create({
    baseURL: 'https://5965461c97cd.ngrok.io'
})

export default api;