import Axios from 'axios';
import setToken from './setToken';
import AuthService from './AuthService'
import authService from './AuthService';
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
        sessionStorage.setItem('token', token);
        authService.isAuthenticated();
        return user;
    } catch (error) {
        throw error
    }
}

export const logout = async () => {
    try {
        authService.isAuthenticated()
        const resp = await api.get('/logout');
        sessionStorage.clear();
        return resp
    } catch (error) {
        throw error
    }
}

export const signup = async (data) => {
    try {
        const resp = await api.post('/auth/signup', data)
        const {data:{token, user}} = resp;
        // console.log(resp)
        setToken.setToken(token);
        return user
    } catch (error) {
        throw error
    }
}

export const getUser = async (data) => {
    const user = localStorage.getItem('user')
    try {
        const resp = await api.get(`/auth/users/${user}`, data);
        return resp.data;
    } catch (error){
        throw error
    }
}

export const updateUser = async (id, data) => {
    try {
        const resp = api.put(`auth/users/${id}`, data);
        return resp
    } catch (error) {
        throw error
    }
}

export const getMaterials = async (data) => {
    try {
        const resp = await api.get('/content/materials');
        // console.log(resp);
        return resp;
    } catch (error) {
        throw error
    }
}

export const postMaterials = async (data) => {
    try {
        const resp = await api.post('/content/materials', data);
        // console.log(resp);
        return resp;
    } catch (error) {
        throw error
    }
}

export const getLocations = async () => {
    try {
        const resp = await api.get('/content/locations');
        // console.log(resp);
        return resp.data;
    } catch (error) {
        throw error
    }
}

export const postLocations = async (data) => {
    try {
        const resp = await api.post('/content/locations', data);
        // console.log(resp);
        return resp;
    } catch (error) {
        throw error;
    }
}