import httpService from './httpService';

const options = { headers: { 'Content-Type': 'application/json; charset=UTF-8' } };
export function register(user) {
    return httpService.post('/users', {
        name: user.name,
        email: user.email,
        password: user.password,
    }, options);
}


export function login(user) {
    return httpService.post('/auth', {
        email: user.email,
        password: user.password,
    }, options);
}