import httpService from './httpService';


const options = { headers: { 'Content-Type': 'application/json; charset=UTF-8' } };

export function addToFavourites(item) {
    return httpService.post('/favourites', {
        name: item.name,
        image: item.image,
        _id: item._id,
    }, options);
}