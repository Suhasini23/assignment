import ImageListReducer from "./ImageListReducer";
import HistoryReducer from "./HistoryReducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    images: ImageListReducer,
    history: HistoryReducer
});

export default rootReducer;