import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bddaf2437b139d25094b1d73b36d784bd3ee8e183abf848836fb66ecef254c99'
    }
});