import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchPrompts = () => API.get('/prompts');
export const createPrompt = (newPrompt) => API.post('/prompts', newPrompt);
export default API;