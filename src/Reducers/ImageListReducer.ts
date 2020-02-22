import { FETCH_IMAGES } from "../Actions/ActionType";

interface IImageList {
    imageData: any,
    loading: boolean
}

function getInitialState(): IImageList {
    return {
        imageData: {},
        loading: true
    };
}
export default function (state: any = getInitialState(), action: any) {

    switch (action.type) {
        case FETCH_IMAGES:
            console.log('!! ', action.payload);
            return {
                ...state,
                loading: false,
                imageData: action.payload
            };
        default:
            return state;
    }
}