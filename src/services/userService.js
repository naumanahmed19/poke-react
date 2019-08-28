import axios from 'axios';


const apiEndPoint = 'http://localhost:3000/api/users';

const options = { headers: { 'Content-Type': 'application/json; charset=UTF-8' } };
export function register(user) {
    return axios.post(apiEndPoint, {
        name: user.name,
        email: user.email,
        password: user.password,
    }, options);
}


export function login(user) {
    return axios.post('http://localhost:3000/api/auth', {
        email: user.email,
        password: user.password,
    }, options);
}