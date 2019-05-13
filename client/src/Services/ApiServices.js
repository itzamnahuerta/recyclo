import Axios from 'axios';
const JwtToken = 'token';
const BASE_URL = 'http://localhost:3001';

const api = Axios.create({
    baseURL : BASE_URL,
    headers : {
        'Authorization': `Bearer ${JwtToken}`,
        'Access-Control-Allow-Origin': '*'
    }
});

export const login = async (data) => {
    try {
        const resp = await api.post('/auth/login', data);
        const {data:{token, user}} = resp;
        localStorage.setItem('token', token);
        return user;
    } catch (error) {
        throw error
    }
}