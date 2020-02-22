import axios from 'axios';
import { FETCH_HISTORY, FETCH_IMAGES } from './ActionType';

export const fetchImages = (text: string) => {
    const API_KEY = "4258bab1feba1df9ab4335af956f8821";
    const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${text}&format=json&nojsoncallback=1`;

    const payload = axios.get(API_URL);

    return {
        type: FETCH_IMAGES,
        payload: payload
    };
}

export const fetchHistory = (term: string) => {
    return {
        type: FETCH_HISTORY,
        payload: term
    };
}