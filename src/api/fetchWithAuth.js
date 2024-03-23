// fetchWithAuth.js

import { getTokenFromLocalStorage } from './authUtils';

const fetchWithAuth = async (url, options = {}) => {
    const token = getTokenFromLocalStorage();
    
    if (!token) {
        console.log('Token not found. Please log in.');
        return;
    }
  
    const headers = {
        ...options.headers,
        'Authorization': `Bearer ${token}`
    };
  
    return fetch(url, { ...options, headers });
};

export default fetchWithAuth;
