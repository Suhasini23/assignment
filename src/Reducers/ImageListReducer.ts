import { FETCH_IMAGES, HIDE_LOADER, SHOW_LOADER } from "../Actions/ActionType";

interface IImageList {
    imageData: any,
    loading: boolean,
    url: string,
    show: boolean
}

function getInitialState(): IImageList {
    return {
        imageData: {},
        loading: true,
        url: "",
        show: false,
    };
}
export default function (state: any = getInitialState(), action: any) {

    switch (action.type) {
        case FETCH_IMAGES:
            console.log('!! ', action.payload);
            return {
                ...state,
                imageData: action.payload
            };
        case HIDE_LOADER:
            return {
                ...state,
                loading: false
            };
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}