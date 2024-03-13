import { combineReducers } from "redux"
import { titleReducer } from "../title/titleReducer";

export default combineReducers(
    {
        title: titleReducer
    },
);