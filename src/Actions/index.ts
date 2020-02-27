import axios from 'axios';
import { FETCH_HISTORY, FETCH_IMAGES, HIDE_LOADER, SHOW_LOADER } from './ActionType';
import { Dispatch } from 'redux';

const setFetchImagesResponse = (response: any) => ({
    type: FETCH_IMAGES,
    payload: response
});

const setHideLoader = () => ({
    type: HIDE_LOADER
});

const setShowLoader = () => ({
    type: SHOW_LOADER
});

export const fetchImages = (text: string) => {
    const API_KEY = "4258bab1feba1df9ab4335af956f8821";
    const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${text}&format=json&nojsoncallback=1`;
    return (dispatch: Dispatch<any>, getState: () => any) => {
        dispatch(setShowLoader())
        return axios.get(API_URL)
            .then(response => {
                if (response && response.data) {
                    dispatch(setFetchImagesResponse(response.data));
                    dispatch(setHideLoader())
                }
            })
            .catch(ex => {
                console.log(ex);
            });
    };
}


export const fetchHistory = (term: string) => {
    return {
        type: FETCH_HISTORY,
        payload: term
    };
}