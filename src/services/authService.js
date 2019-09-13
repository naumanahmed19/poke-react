
import jwtDecode from 'jwt-decode';
import httpService from './httpService';


const tokenKey = 'token';


export async function login(user) {
    const { data: jwt } = await httpService.post('/auth/', {
        email: user.email,
        password: user.password,
    });

    localStorage.setItem(tokenKey, jwt);
}


export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}
export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    }
    catch (ex) {
        return null;
    }
}

export function authenticated() {
    return localStorage.getItem(tokenKey) ? true : false;
}

export function getJwt(tokenKey = 'token') {
    return localStorage.getItem(tokenKey);
}


export default {
    login,
    logout,
    getCurrentUser,
    loginWithJwt,
    authenticated,
    getJwt
}