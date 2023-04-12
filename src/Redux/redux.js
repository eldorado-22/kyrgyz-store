import {applyMiddleware, combineReducers, createStore} from "redux";
import {BasketReducer} from "./Reducer/BasketReducer";
import {FavoriteReducer} from "./Reducer/FavoriteReducer";
import {Index} from "./Reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


export const store = createStore(combineReducers({
    main: Index,
    basket: BasketReducer,
    favorite: FavoriteReducer,

}), composeWithDevTools(applyMiddleware(thunk)))