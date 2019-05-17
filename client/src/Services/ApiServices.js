import Axios from 'axios';
import setToken from './setToken';
const JwtToken = 'token';
const BASE_URL = 'http://localhost:3001';

const maps_key = process.env.REACT_APP_MAPS_KEY 
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
        localStorage.setItem('token', token, 'user', user.username);
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
        return resp.data;
    } catch (error){
        throw error
    }
}

export const pushUser = async (id, data) => {
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
        return resp;
    } catch (error) {
        throw error
    }
}

export const postMaterials = async (data) => {
    try {
        const resp = await api.post('/content/materials', data);
        return resp;
    } catch (error) {
        throw error
    }
}

export const getLocations = async () => {
    try {     
        const resp = await api.get('/content/locations');
        return resp.data;
    } catch (error) {
        throw error
    }
}

export const getLocationByMaterialRoute = async (id) => {
    try {
        const resp = await api.get('/content/materials/:id/locations');
        console.log(resp)
    } catch (error) {
        throw error
    }
}

export const postLocations = async (data) => {
    console.log('works')
    try {
        const resp = await api.post('/content/locations', data);
        console.log(resp)
        return resp;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const getGeoCode = async (name,city,state) => {
    try {
        const url = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${name},${city},${state}&key=${maps_key}`);
        const resp =  await url.json()
        console.log(resp)
        return resp
    } catch (error) {
        throw error
    }
}
