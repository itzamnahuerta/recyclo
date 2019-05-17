const setToken = {
    setToken: (token) => {
        sessionStorage.setItem('token', token);
    },
    fetchToken: () => {
        return sessionStorage.getItem('token');
    },
    clearToken: () => {
        sessionStorage.clear();
    }
}

export default setToken;