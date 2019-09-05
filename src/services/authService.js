import axios from 'axios';
import jwtDecode from 'jwt-decode';

const apiEndPoint = 'http://localhost:3000/api/auth';
const tokenKey = 'token';

const options = { headers: { 'Content-Type': 'application/json; charset=UTF-8' } };


export async function login(user) {
    const { data: jwt } = await axios.post(apiEndPoint, {
        email: user.email,
        password: user.password,
    }, options);

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

export function getJwt() {
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