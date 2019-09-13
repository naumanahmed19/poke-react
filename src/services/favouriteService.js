import httpService from './httpService';


export function addToFavourites(item) {
    return httpService.post('/favourites', {
        name: item.name,
        image: item.image,
        _id: item._id,
    });
}