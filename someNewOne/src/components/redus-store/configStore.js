import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import initialStore from "./initialStore";
import reducer from "./rootReducer";


const store = createStore(
    reducer,
    initialStore,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;