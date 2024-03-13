import { CHANGETITLE } from "../redus-store/actions";
import initialStore from "../redus-store/initialStore";
 
export const titleReducer = (title = initialStore.title, action) => {
    switch(action.type){
        case CHANGETITLE:
            return action.payload;
        default:
            return title;
    }
};