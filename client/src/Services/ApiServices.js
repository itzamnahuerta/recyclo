import Axios from 'axios';
import setToken from './StoreToken';
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

export const signup = async (data) => {
    try {
        const resp = await api.post('/auth/signup', data)
        const {data:{token, user}} = resp;
        setToken.storeToken(token);
        return user
    } catch (error) {
        throw error
    }
}