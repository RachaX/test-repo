import axios from 'axios';

const client = axios.create({
    baseURL: 'https://test-repo2.fly.dev',
    headers: {
        'Content-Type' : 'application/json'
    }
})

export default client;