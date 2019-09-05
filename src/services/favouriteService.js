import axios from 'axios';
import auth from './authService';


const apiEndPoint = 'http://localhost:3000/api/favourites';

const options = { headers: { 'Content-Type': 'application/json; charset=UTF-8' } };

axios.defaults.headers.common['x-auth-token'] = auth.getJwt();

export function addToFavourites(item) {
    return axios.post(apiEndPoint, {
        name: item.name,
        image: item.image,
        _id: item._id,
    }, options);
}