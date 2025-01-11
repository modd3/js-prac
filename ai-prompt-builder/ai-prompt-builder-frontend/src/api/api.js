import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Fetch prompts with optional filtering and sorting
export const fetchPrompts = (params = {}) => API.get('/prompts', { params });

// Create a new prompt
export const createPrompt = (newPrompt) => API.post('/prompts', newPrompt);

export default API;
