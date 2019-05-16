import Axios from 'axios';
import setToken from './setToken';
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
        console.log(user)
        localStorage.setItem('token', token, 'user', user.username);
        JSON.stringify(sessionStorage.setItem('user', user))
        return user;
    } catch (error) {
        throw error
    }
}

export const signup = async (data) => {
    try {
        const resp = await api.post('/auth/signup', data)
        const {data:{token, user}} = resp;
        setToken.setToken(token);
        return user
    } catch (error) {
        throw error
    }
}

export const getUser = async (data) => {
    try {
        const user = localStorage.getItem('user')
        const resp = await api.get(`/auth/users/name/${user}`, data);
        console.log(resp.data)
        return resp.data;
    } catch (error){
        throw error
    }
}

export const updateUser = async (id, data) => {
    try {
        console.log(id)
        const resp = api.put(`auth/users/${id}`, data);
        console.log(resp)
        return resp
    } catch (error) {
        throw error
    }
}

export const getMaterials = async (data) => {
    try {
        const resp = await api.get('/content/materials');
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