import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import todoReducer from "./todolist-reducer";


let reducers = combineReducers({
    toDo: todoReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;